export module CommonStructures {
    export class Dictionary<V> {
        [id: string]: V;
    }
    export interface IDictionary<V> {
        [id: string]: V;
    }
}
