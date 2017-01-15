import { Container } from "./Container" ;
import { HTMLElementFactory } from "../core/HTMLElementFactory";

export class TopContainer extends Container {

    public static _instance : TopContainer ;
    private static ID : string =  "TopContainer" ;

    protected constructor (){
        super() ;
        this.init();
    }

    public static getInstance ():TopContainer {
        if (!TopContainer._instance){
            TopContainer._instance = new TopContainer ();
        }
        return TopContainer._instance ;
    }

    protected init ():void {
        
        this.openDirection = "topToBottom";
        this.closeDirection = "bottomToTop" ;
        
        this._container = HTMLElementFactory.getHTMLElement("div");
        this._container.id = TopContainer.ID ;
        
    }

    

}