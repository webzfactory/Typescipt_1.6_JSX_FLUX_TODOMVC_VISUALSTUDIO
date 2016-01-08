var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react/addons", "./../Actions/TodoActions", "./TodoItem"], function (require, exports, React, TodoActions_1, TodoItem_1) {
    var MainSection = (function (_super) {
        __extends(MainSection, _super);
        function MainSection() {
            _super.apply(this, arguments);
        }
        MainSection.prototype._onToggleCompleteAll = function () {
            TodoActions_1.default.toggleCompleteAll();
        };
        ;
        MainSection.prototype.render = function () {
            if (Object.keys(this.props.allTodos).length < 1)
                return null;
            var todos = [];
            for (var todoItemKey in this.props.allTodos) {
                todos.push(React.createElement(TodoItem_1.default, {"key": todoItemKey, "todoItemModel": this.props.allTodos[todoItemKey]}));
            }
            return React.createElement("section", {"id": "main"}, React.createElement("input", {"id": "toggle-all", "type": "checkbox"}), React.createElement("label", {"htmlFor": "toggle-all"}, "Mark all as complete"), React.createElement("ul", {"id": "todo-list"}, todos));
        };
        return MainSection;
    })(React.Component);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MainSection;
});
