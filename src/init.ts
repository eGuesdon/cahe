
import { StringUtils } from "./com/cahe/utils/StringUtils";
import { LayoutManager } from "./com/cahe/layout/LayoutManager";
import  SlideShow =  require('./com/cahe/components/slideShow/SlideShow') ; 

export class Init {

    private static _instance : Init ;
    private _lm : LayoutManager ;
    private _ss : SlideShow.SlideShow ;

    protected constructor(){
        this.init();
    }

    public static getInstance ():Init {
        if (!Init._instance){
            Init._instance = new Init();
        }
        return Init._instance;
    }

    private init (){
        this._lm = LayoutManager.getInstance();

        var assets : string [] = ["./assets/images/Coupe-de-France.jpg", "./assets/images/Handball.jpg", "./assets/images/Insus.jpg", "./assets/images/Les-Enfoires.jpg", "./assets/images/Riders-Cup.jpg", "./assets/images/Roland-Garros.jpg", "./assets/images/Vieille_canailles.jpg"]

        this._ss = new SlideShow.SlideShow(this._lm.mainContainer.container, assets , SlideShow.SlideShow.LEFTRIGHT, 5000) ;
        this._ss.start();

    }

}

var i : Init = Init.getInstance() ;