var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../Common/Common", "./../Dispatcher/AppDispatcher", "eventEmitter", "./../Constants/TodoConstants", "object-assign", "./../Models/TodoItemModel"], function (require, exports, Common, AppDispatcher, eventEmitter_1, TodoConstants_1, object_assign_1, TodoItemModel_1) {
    var _todos = new Common.CommonStructures.Dictionary();
    /**
     * Create a TODO item.
     * @param  {string} text The content of the TODO
     */
    function create(text) {
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        _todos[id] = new TodoItemModel_1.default(id, false, text);
    }
    /**
    * Update a TODO item.
    * @param  {string} id
    * @param {object} updates An object literal containing only the data to be
    *     updated.
    */
    function update(id, updates) {
        _todos[id] = object_assign_1.default(new TodoItemModel_1.default(), _todos[id], updates);
    }
    /**
     * Update all of the TODO items with the same object.
     * @param  {object} updates An object literal containing only the data to be
     *     updated.
     */
    function updateAll(updates) {
        for (var id in _todos) {
            this.update(id, updates);
        }
    }
    /**
     * Delete a TODO item.
     * @param  {string} id
     */
    function destroy(id) {
        delete _todos[id];
    }
    /**
     * Delete all the completed TODO items.
     */
    function destroyCompleted() {
        for (var id in _todos) {
            if (_todos[id].IsComplete) {
                destroy(id);
            }
        }
    }
    var TodoStore = (function (_super) {
        __extends(TodoStore, _super);
        function TodoStore() {
            _super.call(this);
        }
        ;
        /**
         * Tests whether all the remaining TODO items are marked as completed.
         * @return {boolean}
         */
        TodoStore.prototype.areAllComplete = function () {
            for (var id in _todos) {
                if (!_todos[id].IsComplete) {
                    return false;
                }
            }
            return true;
        };
        ;
        /**
         * Get the entire collection of TODOs.
         * @return {object}
         */
        TodoStore.prototype.getAll = function () {
            return _todos;
        };
        ;
        TodoStore.prototype.emitChange = function () {
            this.emitEvent(TodoStore.CHANGE_EVENT, null);
        };
        /**
         * @param {function} callback
         */
        TodoStore.prototype.addChangeListener = function (callback) {
            this.on(TodoStore.CHANGE_EVENT, callback);
        };
        TodoStore.CHANGE_EVENT = "change";
        return TodoStore;
    })(eventEmitter_1.default);
    ;
    var _todoStore = new TodoStore();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = _todoStore;
    // Register callback to handle all updates
    AppDispatcher.AppDispatcherSingleton.register(function (action) {
        switch (action.type) {
            case TodoConstants_1.default.TODO_CREATE:
                if (action.payload.Text.trim() !== '') {
                    create(action.payload.Text.trim());
                    _todoStore.emitChange();
                }
                break;
            case TodoConstants_1.default.TODO_TOGGLE_COMPLETE_ALL:
                var todoItem = new TodoItemModel_1.default();
                if (_todoStore.areAllComplete()) {
                    todoItem.IsComplete = false;
                    updateAll(todoItem);
                }
                else {
                    todoItem.IsComplete = true;
                    updateAll(todoItem);
                }
                _todoStore.emitChange();
                break;
            case TodoConstants_1.default.TODO_UNDO_COMPLETE:
                var todoItem = new TodoItemModel_1.default();
                todoItem.IsComplete = false;
                update(action.payload.Id, todoItem);
                _todoStore.emitChange();
                break;
            case TodoConstants_1.default.TODO_COMPLETE:
                var todoItem = new TodoItemModel_1.default();
                todoItem.IsComplete = true;
                update(action.payload.Id, todoItem);
                _todoStore.emitChange();
                break;
            case TodoConstants_1.default.TODO_UPDATE_TEXT:
                var todoItem = new TodoItemModel_1.default();
                todoItem.Text = action.payload.Text.trim();
                if (todoItem.Text !== '') {
                    update(action.payload.Id, todoItem);
                    _todoStore.emitChange();
                }
                break;
            case TodoConstants_1.default.TODO_DESTROY:
                destroy(action.payload.Id);
                _todoStore.emitChange();
                break;
            case TodoConstants_1.default.TODO_DESTROY_COMPLETED:
                destroyCompleted();
                _todoStore.emitChange();
                break;
            default:
        }
    });
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
