var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react/addons", "./TodoTextInput", "./../Actions/TodoActions"], function (require, exports, React, TodoTextInput_1, TodoActions_1) {
    var Header = (function (_super) {
        __extends(Header, _super);
        function Header() {
            _super.apply(this, arguments);
        }
        Header.prototype.render = function () {
            var _this = this;
            return React.createElement("div", {"id": "header"}, React.createElement("h1", null, "TODOS"), React.createElement(TodoTextInput_1.default, {"id": "new-todo", "placeholder": "What needs to be done ?", "onSave": function (todoText) { return _this._onSave(todoText); }}));
        };
        //Saves a new Todo
        Header.prototype._onSave = function (todoText) {
            TodoActions_1.default.create(todoText);
        };
        return Header;
    })(React.Component);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Header;
});
