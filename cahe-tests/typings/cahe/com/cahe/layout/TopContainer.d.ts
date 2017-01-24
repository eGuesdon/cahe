import { Container } from "./Container";
export declare class TopContainer extends Container {
    static _instance: TopContainer;
    private static ID;
    protected constructor();
    static getInstance(): TopContainer;
    protected init(): void;
}
