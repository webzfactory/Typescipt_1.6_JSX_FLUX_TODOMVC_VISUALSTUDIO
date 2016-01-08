define(["require", "exports"], function (require, exports) {
    var TodoConstants;
    (function (TodoConstants) {
        TodoConstants[TodoConstants["TODO_CREATE"] = 0] = "TODO_CREATE";
        TodoConstants[TodoConstants["TODO_COMPLETE"] = 1] = "TODO_COMPLETE";
        TodoConstants[TodoConstants["TODO_DESTROY"] = 2] = "TODO_DESTROY";
        TodoConstants[TodoConstants["TODO_DESTROY_COMPLETED"] = 3] = "TODO_DESTROY_COMPLETED";
        TodoConstants[TodoConstants["TODO_TOGGLE_COMPLETE_ALL"] = 4] = "TODO_TOGGLE_COMPLETE_ALL";
        TodoConstants[TodoConstants["TODO_UNDO_COMPLETE"] = 5] = "TODO_UNDO_COMPLETE";
        TodoConstants[TodoConstants["TODO_UPDATE_TEXT"] = 6] = "TODO_UPDATE_TEXT";
    })(TodoConstants || (TodoConstants = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TodoConstants;
});
