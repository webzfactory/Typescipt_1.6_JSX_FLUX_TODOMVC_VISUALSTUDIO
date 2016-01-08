import * as Common from "./../Common/Common"
import * as AppDispatcher from "./../Dispatcher/AppDispatcher";
import EventEmitter from "eventEmitter"
import TodoConstants from "./../Constants/TodoConstants"
import ObjectAssign from "object-assign"
import TodoItem from "./../Models/TodoItemModel"


var _todos = new Common.CommonStructures.Dictionary<TodoItem>();

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function create(text: string): void {
    var id: string = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _todos[id] = new TodoItem(id, false, text);
}

/**
* Update a TODO item.
* @param  {string} id
* @param {object} updates An object literal containing only the data to be
*     updated.
*/
function update(id: string, updates: TodoItem) {
    _todos[id] = ObjectAssign(new TodoItem(), _todos[id], updates);
}

/**
 * Update all of the TODO items with the same object.
 * @param  {object} updates An object literal containing only the data to be
 *     updated.
 */
function updateAll(updates: TodoItem): void {
    for (var id in _todos) {
        this.update(id, updates);
    }
}

/**
 * Delete a TODO item.
 * @param  {string} id
 */
function destroy(id: string): void {
    delete _todos[id];
}

/**
 * Delete all the completed TODO items.
 */
function destroyCompleted(): void {
    for (var id in _todos) {
        if (_todos[id].IsComplete) {
            destroy(id);
        }
    }
}



class TodoStore extends EventEmitter {
    public static CHANGE_EVENT: string = "change";

    constructor() {
        super();        
    };   

    /**
     * Tests whether all the remaining TODO items are marked as completed.
     * @return {boolean}
     */
    public areAllComplete(): boolean {
        for (var id in _todos) {
            if (!_todos[id].IsComplete) {
                return false;
            }
        }
        return true;
    };

    /**
     * Get the entire collection of TODOs.
     * @return {object}
     */
    public getAll(): Common.CommonStructures.Dictionary<TodoItem> {
        return _todos;
    };

    public emitChange(): void {
        this.emitEvent(TodoStore.CHANGE_EVENT, null);
    }

    /**
     * @param {function} callback
     */
    public addChangeListener(callback: Function): void {
        this.on(TodoStore.CHANGE_EVENT, callback);
    }

    ///**
    // * @param {function} callback
    // */
    //public removeChangeListener(callback: Function): void {
    //    this.removeListener(CHANGE_EVENT, callback);
    //}

};
var _todoStore = new TodoStore();
export default _todoStore;

// Register callback to handle all updates
AppDispatcher.AppDispatcherSingleton.register(function (action: AppDispatcher.Action<TodoConstants, TodoItem>) {

    switch (action.type) {

        case TodoConstants.TODO_CREATE:
            if (action.payload.Text.trim() !== '') {
                create(action.payload.Text.trim());
                _todoStore.emitChange();
            }
            break;

        case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
            var todoItem = new TodoItem();
            if (_todoStore.areAllComplete()) {
                todoItem.IsComplete = false;
                updateAll(todoItem);
            } else {
                todoItem.IsComplete = true;
                updateAll(todoItem);
            }
            _todoStore.emitChange();
            break;

        case TodoConstants.TODO_UNDO_COMPLETE:
            var todoItem = new TodoItem();
            todoItem.IsComplete = false;
            update(action.payload.Id, todoItem);
            _todoStore.emitChange();
            break;

        case TodoConstants.TODO_COMPLETE:
            var todoItem = new TodoItem();
            todoItem.IsComplete = true;
            update(action.payload.Id, todoItem);
            _todoStore.emitChange();
            break;

        case TodoConstants.TODO_UPDATE_TEXT:
            var todoItem = new TodoItem();
            todoItem.Text = action.payload.Text.trim();
            if (todoItem.Text !== '') {
                update(action.payload.Id, todoItem);
                _todoStore.emitChange();
            }
            break;

        case TodoConstants.TODO_DESTROY:
            destroy(action.payload.Id);
            _todoStore.emitChange();
            break;

        case TodoConstants.TODO_DESTROY_COMPLETED:
            destroyCompleted();
            _todoStore.emitChange();
            break;

        default:
        // no op
    }
});

///*
// * Copyright (c) 2014, Facebook, Inc.
// * All rights reserved.
// *
// * This source code is licensed under the BSD-style license found in the
// * LICENSE file in the root directory of this source tree. An additional grant
// * of patent rights can be found in the PATENTS file in the same directory.
// *
// * TodoStore
// */

//var AppDispatcher = require('../dispatcher/AppDispatcher');
//var EventEmitter = require('events').EventEmitter;
//var TodoConstants = require('../constants/TodoConstants');
//var assign = require('object-assign');

//var CHANGE_EVENT = 'change';

//var _todos = {};

///**
// * Create a TODO item.
// * @param  {string} text The content of the TODO
// */
//function create(text) {
//    // Hand waving here -- not showing how this interacts with XHR or persistent
//    // server-side storage.
//    // Using the current timestamp + random number in place of a real id.
//    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
//    _todos[id] = {
//        id: id,
//        complete: false,
//        text: text
//    };
//}

///**
// * Update a TODO item.
// * @param  {string} id
// * @param {object} updates An object literal containing only the data to be
// *     updated.
// */
//function update(id, updates) {
//    _todos[id] = assign({}, _todos[id], updates);
//}

///**
// * Update all of the TODO items with the same object.
// * @param  {object} updates An object literal containing only the data to be
// *     updated.
// */
//function updateAll(updates) {
//    for (var id in _todos) {
//        update(id, updates);
//    }
//}

///**
// * Delete a TODO item.
// * @param  {string} id
// */
//function destroy(id) {
//    delete _todos[id];
//}

///**
// * Delete all the completed TODO items.
// */
//function destroyCompleted() {
//    for (var id in _todos) {
//        if (_todos[id].complete) {
//            destroy(id);
//        }
//    }
//}

//var TodoStore = assign({}, EventEmitter.prototype, {

//    /**
//     * Tests whether all the remaining TODO items are marked as completed.
//     * @return {boolean}
//     */
//    areAllComplete: function () {
//        for (var id in _todos) {
//            if (!_todos[id].complete) {
//                return false;
//            }
//        }
//        return true;
//    },

//    /**
//     * Get the entire collection of TODOs.
//     * @return {object}
//     */
//    getAll: function () {
//        return _todos;
//    },

//    emitChange: function () {
//        this.emit(CHANGE_EVENT);
//    },

//    /**
//     * @param {function} callback
//     */
//    addChangeListener: function (callback) {
//        this.on(CHANGE_EVENT, callback);
//    },

//    /**
//     * @param {function} callback
//     */
//    removeChangeListener: function (callback) {
//        this.removeListener(CHANGE_EVENT, callback);
//    }
//});

//// Register callback to handle all updates
//AppDispatcher.register(function (action) {
//    var text;

//    switch (action.actionType) {
//        case TodoConstants.TODO_CREATE:
//            text = action.text.trim();
//            if (text !== '') {
//                create(text);
//                TodoStore.emitChange();
//            }
//            break;

//        case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
//            if (TodoStore.areAllComplete()) {
//                updateAll({ complete: false });
//            } else {
//                updateAll({ complete: true });
//            }
//            TodoStore.emitChange();
//            break;

//        case TodoConstants.TODO_UNDO_COMPLETE:
//            update(action.id, { complete: false });
//            TodoStore.emitChange();
//            break;

//        case TodoConstants.TODO_COMPLETE:
//            update(action.id, { complete: true });
//            TodoStore.emitChange();
//            break;

//        case TodoConstants.TODO_UPDATE_TEXT:
//            text = action.text.trim();
//            if (text !== '') {
//                update(action.id, { text: text });
//                TodoStore.emitChange();
//            }
//            break;

//        case TodoConstants.TODO_DESTROY:
//            destroy(action.id);
//            TodoStore.emitChange();
//            break;

//        case TodoConstants.TODO_DESTROY_COMPLETED:
//            destroyCompleted();
//            TodoStore.emitChange();
//            break;

//        default:
//        // no op
//    }
//});

//module.exports = TodoStore;