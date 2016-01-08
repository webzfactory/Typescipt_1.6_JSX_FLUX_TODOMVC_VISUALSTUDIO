import * as React from "react/addons";
import TodoActions from "./../Actions/TodoActions";
import TodoItemComponent from "./TodoItem";
import * as Common from "./../Common/Common"
import TodoItemModel from "./../Models/TodoItemModel"

interface IMainSectionProps {
    allTodos: Common.CommonStructures.Dictionary<TodoItemModel>,
    areAllComplete: boolean
}

export default class MainSection extends React.Component<IMainSectionProps, any>{
    private _onToggleCompleteAll(): void {
        TodoActions.toggleCompleteAll();
    };

    public render(): JSX.Element {
        if (Object.keys(this.props.allTodos).length < 1)
            return null;
        var todos: Array<JSX.Element> = [];
        for (var todoItemKey in this.props.allTodos) {
            todos.push(<TodoItemComponent key={todoItemKey} todoItemModel={this.props.allTodos[todoItemKey]} />);
        }

        return <section id="main">
                <input id="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">{todos}</ul>
            </section>
    }
}