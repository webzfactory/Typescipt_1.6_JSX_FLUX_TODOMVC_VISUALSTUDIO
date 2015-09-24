var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react/addons"], function (require, exports, React) {
    var ENTER_KEY_CODE = 13;
    var TodoTextInput = (function (_super) {
        __extends(TodoTextInput, _super);
        function TodoTextInput(props) {
            _super.call(this, props);
            this.state = { value: (props.value || '') };
        }
        TodoTextInput.prototype.render = function () {
            var _this = this;
            return React.createElement("input", {"className": this.props.className, "id": this.props.id, "placeholder": this.props.placeholder, "onBlur": function () { return _this._save(); }, "onChange": function (e) { return _this._onChange(e); }, "onKeyDown": function (e) { return _this._onKeyDown(e); }, "value": this.state.value, "autoFocus": true});
        };
        TodoTextInput.prototype._save = function () {
            this.props.onSave(this.state.value);
            this.setState({ value: '' });
        };
        TodoTextInput.prototype._onChange = function (e) {
            var target = e.target;
            this.setState({ value: target.value });
        };
        TodoTextInput.prototype._onKeyDown = function (e) {
            if (e.keyCode === ENTER_KEY_CODE) {
                this._save();
            }
        };
        return TodoTextInput;
    })(React.Component);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TodoTextInput;
});
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
