import * as React from "react/addons";
import TodoTextInput from "./TodoTextInput"; 
import TodoActions from "./../Actions/TodoActions";


export default class Header extends React.Component<any, any> {
    
    public render(): JSX.Element {
        return <div id="header">
            <h1>TODOS</h1>
            <TodoTextInput
                id="new-todo"
                placeholder="What needs to be done ?"
                onSave={(todoText) => this._onSave(todoText) }
                />
            </div>;
    }


    //Saves a new Todo
    private _onSave(todoText: string): void {
        TodoActions.create(todoText);
    }
} 