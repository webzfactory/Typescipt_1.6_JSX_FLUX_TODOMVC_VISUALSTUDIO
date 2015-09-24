import * as React from "react/addons";

const ENTER_KEY_CODE: number = 13;

interface TodoTextInputProps {
    className?: string
    id?: string
    placeholder?: string
    value?: string
    onSave?: Function 
}

interface TodoTextInputState {
    value: string
}

export default class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState> {

    state: TodoTextInputState; 

    constructor(props: TodoTextInputProps) {
        super(props);
        this.state = { value : (props.value || '')};        
    }   

    public render(): JSX.Element {
        return <input
            className = {this.props.className}
            id = { this.props.id }
            placeholder = { this.props.placeholder }
            onBlur = { () => this._save() }
            onChange = { (e) => this._onChange(e) }
            onKeyDown = { (e) => this._onKeyDown(e) }
            value = { this.state.value }
            autoFocus = { true}
            />;
    }

    private _save(): void {
        this.props.onSave(this.state.value);
        this.setState({value : ''});
    }

    private _onChange(e: React.FormEvent): void {
        
        var target = e.target as HTMLInputElement;
        this.setState({ value: target.value });
    }

    private _onKeyDown(e: __React.KeyboardEvent) : void {
        if (e.keyCode === ENTER_KEY_CODE) {
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
