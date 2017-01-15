import { Container } from "./Container";
export declare class CoreContainer extends Container {
    static _instance: CoreContainer;
    private static ID;
    protected constructor();
    static getInstance(): CoreContainer;
    private init();
}
