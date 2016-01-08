// Type definitions for EventEmitter v4.2.11 - git.io/ee
// Project: https://github.com/Olical/EventEmitter
// Definitions by: Vlad Teodor <https://github.com/webzfactory/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "eventEmitter" {

    /**
    * Class for managing events.
    * Can be extended to provide event functionality in other classes.
    *
    * @class EventEmitter Manages event registering and emitting.
    */
    export default class EventEmitter {
        constructor();

        /**
        * Adds a listener function to the specified event.
        * The listener will not be added if it is a duplicate.
        * If the listener returns true then it will be removed after it is called.
        * If you pass a regular expression as the event name then the listener will be added to all events that match it.
        *
        * @param {String|RegExp} evt Name of the event to attach the listener to.
        * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
        * @return {Object} Current instance of EventEmitter for chaining.
        */
        addEventListener(evt: String | RegExp, listener: Function): EventEmitter;
        on(evt: String | RegExp, listener: Function): EventEmitter; 
        //TODO: There is now way to have an alias ?

        /**
        * Emits an event of your choice.
        * When emitted, every listener attached to that event will be executed.
        * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
        * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
        * So they will not arrive within the array on the other side, they will be separate.
        * You can also pass a regular expression to emit to all events that match it.
        *
        * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
        * @param {Array} [args] Optional array of arguments to be passed to each listener.
        * @return {Object} Current instance of EventEmitter for chaining.
        */
        emitEvent(evt: String | RegExp, args: [any]): EventEmitter;
        trigger(evt: String | RegExp, args: [any]): EventEmitter;

    }
    
}

//declare module "eventEmitter" {
//    export = EventEmitter;
//}
