var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react/addons", "./Header"], function (require, exports, React, Header_1) {
    var TodoApp = (function (_super) {
        __extends(TodoApp, _super);
        function TodoApp() {
            _super.apply(this, arguments);
        }
        TodoApp.prototype.render = function () {
            return React.createElement("div", null, React.createElement(Header_1.default, null));
        };
        return TodoApp;
    })(React.Component);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TodoApp;
});
