export declare class SlideShow {
    static LEFTRIGHT: string;
    static RIGHTLEFT: string;
    static TOPDOWN: string;
    static DOWNTOP: string;
    private _dataProvider;
    private _direction;
    private _index;
    private _parentContainer;
    private _container;
    private _timelaps;
    private _interval;
    constructor(parentContainer?: HTMLElement, dataProvider?: string[], direction?: string, timelaps?: number);
    next(): number;
    previous(): number;
    start(): void;
    stop(): void;
    private setInterval();
    private setContainer();
    private setContent();
    timeLaps: number;
}
