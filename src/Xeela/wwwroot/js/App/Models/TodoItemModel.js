define(["require", "exports"], function (require, exports) {
    var TodoItem = (function () {
        function TodoItem(id, isComplete, text) {
            if (id === void 0) { id = null; }
            if (isComplete === void 0) { isComplete = false; }
            if (text === void 0) { text = ""; }
            this.Id = id;
            this.IsComplete = isComplete;
            this.Text = text;
        }
        return TodoItem;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TodoItem;
});
