import { Container } from "./Container" ;
import { HTMLElementFactory } from "../core/HTMLElementFactory";

export class MainContainer extends Container {

    public static _instance : MainContainer ;
    private static ID : string =  "MainContainer" ;

    protected constructor (){
        super() ;
        this.init();
    }

    public static getInstance ():MainContainer {
        if (!MainContainer._instance){
            MainContainer._instance = new MainContainer ();
        }
        return MainContainer._instance ;
    }

    protected init ():void {
        this._container = HTMLElementFactory.getHTMLElement("div");
        this._container.id = MainContainer.ID ;
    }

}