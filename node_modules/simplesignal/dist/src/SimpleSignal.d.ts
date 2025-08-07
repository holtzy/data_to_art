/**
 * @author zeh fernando
 */
export default class SimpleSignal<F extends Function> {
    private functions;
    constructor();
    add(func: F): boolean;
    remove(func: F): boolean;
    removeAll(): boolean;
    dispatch(...args: any[]): void;
    readonly numItems: number;
}
