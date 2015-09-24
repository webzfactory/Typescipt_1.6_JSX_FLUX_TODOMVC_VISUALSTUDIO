/*
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "flux"], function (require, exports, Flux) {
    var AppDispatcher = (function (_super) {
        __extends(AppDispatcher, _super);
        function AppDispatcher() {
            _super.call(this);
        }
        return AppDispatcher;
    })(Flux.Dispatcher);
    exports.AppDispatcher = AppDispatcher;
    (function (AppDispatcherSourceEnum) {
        AppDispatcherSourceEnum[AppDispatcherSourceEnum["VIEW_ACTION"] = 0] = "VIEW_ACTION";
    })(exports.AppDispatcherSourceEnum || (exports.AppDispatcherSourceEnum = {}));
    var AppDispatcherSourceEnum = exports.AppDispatcherSourceEnum;
});
