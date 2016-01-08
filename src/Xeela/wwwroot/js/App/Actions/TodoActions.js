define(["require", "exports", "./../Dispatcher/AppDispatcher", "./../Constants/TodoConstants", "./../Models/TodoItemModel"], function (require, exports, AppDispatcher, TodoConstants_1, TodoItemModel_1) {
    var TodoActions = (function () {
        function TodoActions() {
        }
        /**
         * @param  {string} text
         */
        TodoActions.create = function (text) {
            var action = new AppDispatcher.Action(TodoConstants_1.default.TODO_CREATE, new TodoItemModel_1.default());
            action.payload.Text = text;
            AppDispatcher.AppDispatcherSingleton.dispatch(action);
        };
        ;
        /**
         * @param  {string} id The ID of the ToDo item
         * @param  {string} text
         */
        TodoActions.updateText = function (id, text) {
            var action = new AppDispatcher.Action(TodoConstants_1.default.TODO_UPDATE_TEXT, new TodoItemModel_1.default());
            action.payload.Id = id;
            action.payload.Text = text;
            AppDispatcher.AppDispatcherSingleton.dispatch(action);
        };
        ;
        /**
         * Toggle whether a single ToDo is complete
         * @param  {object} todo
         */
        TodoActions.toggleComplete = function (todo) {
            var action = todo.IsComplete ?
                new AppDispatcher.Action(TodoConstants_1.default.TODO_UNDO_COMPLETE, todo) :
                new AppDispatcher.Action(TodoConstants_1.default.TODO_COMPLETE, todo);
            AppDispatcher.AppDispatcherSingleton.dispatch(action);
        };
        ;
        /**
         * Mark all ToDos as complete
         */
        TodoActions.toggleCompleteAll = function () {
            var action = new AppDispatcher.Action(TodoConstants_1.default.TODO_TOGGLE_COMPLETE_ALL, null);
            AppDispatcher.AppDispatcherSingleton.dispatch(action);
        };
        ;
        /**
         * @param  {string} id
         */
        TodoActions.destroy = function (id) {
            var action = new AppDispatcher.Action(TodoConstants_1.default.TODO_DESTROY, new TodoItemModel_1.default());
            action.payload.Id = id;
            AppDispatcher.AppDispatcherSingleton.dispatch(action);
        };
        ;
        /**
         * Delete all the completed ToDos
         */
        TodoActions.destroyCompleted = function () {
            var action = new AppDispatcher.Action(TodoConstants_1.default.TODO_DESTROY_COMPLETED, null);
            AppDispatcher.AppDispatcherSingleton.dispatch(action);
        };
        ;
        return TodoActions;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TodoActions;
    ;
});
