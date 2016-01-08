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
    exports.AppDispatcherSingleton = new AppDispatcher();
    var Action = (function () {
        function Action(type, payload) {
            this.type = type;
            this.payload = payload;
        }
        return Action;
    })();
    exports.Action = Action;
});
