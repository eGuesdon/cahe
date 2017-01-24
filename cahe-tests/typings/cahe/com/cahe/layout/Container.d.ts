import { IContainer } from "./IContainer";
export declare class Container implements IContainer {
    protected _container: HTMLElement;
    protected _parentContainer: HTMLElement;
    protected openDirection: string;
    protected closeDirection: string;
    protected constructor();
    displayContainer(target: HTMLElement): HTMLElement;
    openContainer(): HTMLElement;
    closeContainer(): HTMLElement;
    hideContainer(): HTMLElement;
    removeContainer(): void;
    readonly container: HTMLElement;
}
