
/// <reference path="../../../../typings/globals/node/index.d.ts" />

import { HTMLElementFactory } from "../core/HTMLElementFactory";
//import { MainContainer } from "./MainContainer" ;
//import { TopContainer } from "./TopContainer" ;
// import { CoreContainer } from "./CoreContainer" ;

import CC = require("./CoreContainer");
import TC = require("./TopContainer");
import MC = require("./MainContainer");

import SU = require ('../utils/StringUtils') ;


export class LayoutManager {
    
    private static _instance : LayoutManager ;
    private _mainContainer : MC.MainContainer ;
    private _topContainer : TC.TopContainer ;
    private _coreContainer : CC.CoreContainer ;
    private _conf : JSON ;

    protected constructor (){
        this.init();

       

    }

    public static getInstance (conf?:JSON):LayoutManager{

        if (!LayoutManager._instance){
            LayoutManager._instance = new LayoutManager();
        }
        return LayoutManager._instance
    }

// ======= Public Methods =======\\

    public setTopContainer ():void{
        this._topContainer = TC.TopContainer.getInstance() ;
        this._topContainer.displayContainer(this.coreContainerAsContainer) ;

        // var _su : typeof SU.StringUtils = require('../utils/StringUtils');
        // console.log(SU.StringUtils.prefillWith ("Eric", "Bonjour ")) ;

    }

// ======= Private Methods =======\\

    /**
     * Init
     */
    private init():void{
        this._coreContainer = CC.CoreContainer.getInstance();
        this._coreContainer.displayContainer(document.body) ;

        this._mainContainer = MC.MainContainer.getInstance() ;
        this._mainContainer.displayContainer(this.coreContainerAsContainer) ;

        // this.setTopContainer();
    }



    // ======= Accessors =======\\

    private get coreContainer () : CC.CoreContainer {
        return this._coreContainer ;
    } 

    private get coreContainerAsContainer () : HTMLElement {
        return this.coreContainer.container ;
    }

    public get mainContainer () : MC.MainContainer {
        return this._mainContainer ;
    }

    public get mainContainerAsContainer () : HTMLElement{
        return this._mainContainer.container ;
    }

    public get topContainer () : TC.TopContainer {
        return this.topContainer ;
    }

    public get topContainerAsContainer ():HTMLElement {
        return this._topContainer.container ;
    }
}