/// <reference path="../node_modules/@types/nw.gui/index.d.ts" />
import {WelcomeMsg} from './WelcomeMsg' ;

declare var nw : any ;

export class Main {

    private doc : Document = document ;
    private body : HTMLElement = this.doc.body ;
    private i : WelcomeMsg= new WelcomeMsg() ;

    constructor (){
        this.init();
            
        nw.Window.get().showDevTools() ;
    }

    public init ():void{
        this.doc.getElementById("welcomeMsg").innerText = this.i.sayHello();
    }
}

var main : Main = new Main(); 

