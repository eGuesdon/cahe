/// <reference path="../../../../globals/node/index.d.ts" />
import TC = require("./TopContainer");
import MC = require("./MainContainer");
export declare class LayoutManager {
    private static _instance;
    private _mainContainer;
    private _topContainer;
    private _coreContainer;
    private _conf;
    protected constructor();
    static getInstance(conf?: JSON): LayoutManager;
    setTopContainer(): void;
    private init();
    private readonly coreContainer;
    private readonly coreContainerAsContainer;
    readonly mainContainer: MC.MainContainer;
    readonly mainContainerAsContainer: HTMLElement;
    readonly topContainer: TC.TopContainer;
    readonly topContainerAsContainer: HTMLElement;
}
