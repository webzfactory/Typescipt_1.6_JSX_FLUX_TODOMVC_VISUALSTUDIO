/*
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */

import * as Flux from "flux"


export class AppDispatcher extends Flux.Dispatcher<ActionPayload<any>> {
    constructor() {
        super();
    }
}
export enum AppDispatcherSourceEnum {
    VIEW_ACTION
}
export interface ActionPayload<T> {
    source: AppDispatcherSourceEnum
    action: T
}


