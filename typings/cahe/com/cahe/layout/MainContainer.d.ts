import { Container } from "./Container";
export declare class MainContainer extends Container {
    static _instance: MainContainer;
    private static ID;
    protected constructor();
    static getInstance(): MainContainer;
    protected init(): void;
}
