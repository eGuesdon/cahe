// import nw from 'nw.gui' ;
// import Import from './Import' ;



export class Main {

    private doc : Document = document ;
    private body : HTMLElement = this.doc.body ;
    // private i : Import.Import = new Import.Import() ;

    constructor (){
        this.init();
        // nw.Window.get().showDevTools() ;
    }

    public init ():void{
        let h1 = document.getElementById("welcomeMsg");
        let txt:string = "Document is : \n\n" ;

        for (let i in this.doc){
            txt += i + " : " + this.doc[i] + " \n" ;
        }
        txt += "\n\n Body is : \n\n"
        for (let i in this.body) {
            txt += i + " : " + this.body[i] + " \n" ;
        }

        h1.innerText = txt ; 
    }
}

var main : Main = new Main(); 

