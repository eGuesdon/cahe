import {Container} from "./Container" ;
import { HTMLElementFactory } from "../core/HTMLElementFactory";

export class CoreContainer extends Container {

    public static _instance : CoreContainer ;
    private static ID : string =  "CoreContainer" ;

    protected constructor (){
        super();
        this.init();
    }

    public static getInstance ():CoreContainer {
        if (!CoreContainer._instance){
            CoreContainer._instance = new CoreContainer ();
        }
        return CoreContainer._instance ;
    }

    private init ():void {
        this._container = HTMLElementFactory.getHTMLElement("div");
        this._container.id = CoreContainer.ID ;
    }

}