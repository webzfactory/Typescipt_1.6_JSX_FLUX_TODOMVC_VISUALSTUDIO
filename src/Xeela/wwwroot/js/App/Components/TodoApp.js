/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react/addons", "./Header", "./../Stores/TodoStore", "./../Components/MainSection"], function (require, exports, React, Header_1, TodoStore_1, MainSection_1) {
    /**
     * Retrieve the current TODO data from the TodoStore
     */
    function getTodoState() {
        return {
            allTodos: TodoStore_1.default.getAll(),
            areAllComplete: TodoStore_1.default.areAllComplete()
        };
    }
    var TodoApp = (function (_super) {
        __extends(TodoApp, _super);
        function TodoApp() {
            _super.apply(this, arguments);
            //public getInitialState() {
            //    return getTodoState();
            //};
            this.state = getTodoState();
        }
        TodoApp.prototype._onChange = function () {
            this.setState(getTodoState());
        };
        ;
        TodoApp.prototype.componentDidMount = function () {
            var _this = this;
            TodoStore_1.default.addChangeListener(function () {
                return _this._onChange();
            });
        };
        ;
        TodoApp.prototype.componentWillUnmount = function () {
            //TodoStore.removeChangeListener(this._onChange);
        };
        ;
        TodoApp.prototype.render = function () {
            return React.createElement("div", null, React.createElement(Header_1.default, null), React.createElement(MainSection_1.default, {"allTodos": this.state.allTodos, "areAllComplete": this.state.areAllComplete}));
        };
        return TodoApp;
    })(React.Component);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TodoApp;
});
