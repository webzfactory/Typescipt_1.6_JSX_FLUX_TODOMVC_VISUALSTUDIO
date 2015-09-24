define(["require", "exports", "react/addons", "Components/TodoTextInput"], function (require, exports, React, Input) {
    var test = function () { alert(); };
    React.render(React.createElement(Input.TodoTextInput, {"id": "inputTest", "className": "InputTest", "placeholder": "Enter your todo here", "value": "", "onSave": test}), document.getElementById('todoapp'));
});
