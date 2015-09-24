//Bootsrap
import * as React from "react/addons";
import * as Input from "Components/TodoTextInput";

var test = function () { alert(); };

React.render(<Input.TodoTextInput id="inputTest" className="InputTest" placeholder="Enter your todo here" value="" onSave={test} />, document.getElementById('todoapp'));