/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */
import * as AppDispatcher from "./../Dispatcher/AppDispatcher";
import TodoConstants from "./../Constants/TodoConstants"
import TodoItem from "./../Models/TodoItemModel"

export default class TodoActions {

    /**
     * @param  {string} text
     */
    public static create(text: string): void {
        var action = new AppDispatcher.Action<TodoConstants, TodoItem>(TodoConstants.TODO_CREATE, new TodoItem());
        action.payload.Text = text;
        AppDispatcher.AppDispatcherSingleton.dispatch(action);
    };

    /**
     * @param  {string} id The ID of the ToDo item
     * @param  {string} text
     */
    public static updateText(id: string, text: string): void {
        var action = new AppDispatcher.Action<TodoConstants, TodoItem>(TodoConstants.TODO_UPDATE_TEXT, new TodoItem());
        action.payload.Id = id;
        action.payload.Text = text;        
        AppDispatcher.AppDispatcherSingleton.dispatch(action);
    };

    /**
     * Toggle whether a single ToDo is complete
     * @param  {object} todo
     */
    public static toggleComplete(todo: TodoItem): void {
        var action = todo.IsComplete ?
            new AppDispatcher.Action<TodoConstants, TodoItem>(TodoConstants.TODO_UNDO_COMPLETE, todo) :
            new AppDispatcher.Action<TodoConstants, TodoItem>(TodoConstants.TODO_COMPLETE, todo);
        AppDispatcher.AppDispatcherSingleton.dispatch(action);
    };

    /**
     * Mark all ToDos as complete
     */
    public static toggleCompleteAll(): void {
        var action = new AppDispatcher.Action<TodoConstants, TodoItem>(TodoConstants.TODO_TOGGLE_COMPLETE_ALL, null);        
        AppDispatcher.AppDispatcherSingleton.dispatch(action);
    };

    /**
     * @param  {string} id
     */
    public static destroy(id: string): void {
        var action = new AppDispatcher.Action<TodoConstants, TodoItem>(TodoConstants.TODO_DESTROY, new TodoItem());
        action.payload.Id = id;        
        AppDispatcher.AppDispatcherSingleton.dispatch(action);
    };

    /**
     * Delete all the completed ToDos
     */
    public static destroyCompleted(): void {
        var action = new AppDispatcher.Action<TodoConstants, TodoItem>(TodoConstants.TODO_DESTROY_COMPLETED, null);
        AppDispatcher.AppDispatcherSingleton.dispatch(action);
    };

};