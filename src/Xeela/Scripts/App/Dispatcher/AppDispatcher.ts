/*
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */
import * as Flux from "flux"

class AppDispatcher extends Flux.Dispatcher<Action<any, any>> {
    constructor() {
        super();        
    }    
}
export var AppDispatcherSingleton: AppDispatcher = new AppDispatcher();

export class Action<ActionTypeEnum, Payload> {
    constructor(type: ActionTypeEnum, payload: Payload) {
        this.type = type;
        this.payload = payload;
    }
    public type: ActionTypeEnum;
    public payload: Payload;
}


