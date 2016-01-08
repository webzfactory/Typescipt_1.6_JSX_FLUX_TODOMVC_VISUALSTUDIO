/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */
"use strict"
import * as React from "react/addons";
import Header from "./Header";
import TodoStore from "./../Stores/TodoStore";
import TodoItemModel from "./../Models/TodoItemModel"
import * as Common from "./../Common/Common"
import MainSection from "./../Components/MainSection"

interface State {
    allTodos: Common.CommonStructures.Dictionary<TodoItemModel>,
    areAllComplete: boolean
}
/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState(): State {
    return {
        allTodos: TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    };
}

export default class TodoApp extends React.Component<any, State> {
    private _onChange() {
        this.setState(getTodoState());
    };
     
    //public getInitialState() {
    //    return getTodoState();
    //};

    public state: State = getTodoState();

    public componentDidMount() {
        TodoStore.addChangeListener(() =>            
            this._onChange()
        );
    };   

    public componentWillUnmount() {
        //TodoStore.removeChangeListener(this._onChange);
    };

    public render(): JSX.Element {        
        return <div>
                <Header />
                <MainSection allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete} />            
               </div>;
    }
}