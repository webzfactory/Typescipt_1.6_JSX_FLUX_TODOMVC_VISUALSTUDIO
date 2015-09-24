

import * as React from "react/addons";

const ENTER_KEY_CODE: number = 13;

class TodoTextInputProps {
    className: string
    id: string
    placeholder: string
    value: string
    onSave: Function 
}

class TodoTextInputState {
    constructor(public value: string) {
    }
}

export class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState> {

    state: TodoTextInputState; 

    constructor(props: TodoTextInputProps) {
        super(props);
        this.state = new TodoTextInputState(props.value || '');        
    }   

    public render(): JSX.Element {
        return <input
            className = {this.props.className}
            id = { this.props.id }
            placeholder = { this.props.placeholder }
            onBlur = { () => this._save }
            onChange = { this._onChange }
            onKeyDown = { () => this._onKeyDown }
            value = { this.state.value }
            autoFocus = { true}
            />;
    }

    private _save(): void {
        //    this.props.onSave(this.state.value);
        this.setState(new TodoTextInputState(''));
    }

    private _onChange = (e: React.FormEvent): void => {
        debugger;
        var target = e.target as HTMLInputElement;
        this.setState(new TodoTextInputState(target.value));
    }

    private _onKeyDown(event: KeyboardEvent) : void {
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    }

}

//var ENTER_KEY_CODE = 13;

//var TodoTextInput = React.createClass({

//    propTypes: {
//        className: ReactPropTypes.string,
//        id: ReactPropTypes.string,
//        placeholder: ReactPropTypes.string,
//        onSave: ReactPropTypes.func.isRequired,
//        value: ReactPropTypes.string
//    },

//    getInitialState: function () {
//        return {
//            value: this.props.value || ''
//        };
//    },

//    /**
//     * @return {object}
//     */
//    render: function () /*object*/ {
//        return (
//            <input
//        className={ this.props.className }
//        id = { this.props.id }
//        placeholder = { this.props.placeholder }
//        onBlur = { this._save }
//        onChange = { this._onChange }
//        onKeyDown = { this._onKeyDown }
//        value = { this.state.value }
//        autoFocus = { true}
//        />
//    );
//  },

///**
// * Invokes the callback passed in as onSave, allowing this component to be
// * used in different ways.
// */
//_save: function() {
//    this.props.onSave(this.state.value);
//    this.setState({
//        value: ''
//    });
//},

///**
// * @param {object} event
// */
//_onChange: function(/*object*/ event) {
//    this.setState({
//        value: event.target.value
//    });
//},

///**
// * @param  {object} event
// */
//_onKeyDown: function(event) {
//    if (event.keyCode === ENTER_KEY_CODE) {
//        this._save();
//    }
//}

//});

//module.exports = TodoTextInput;
