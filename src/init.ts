
import { StringUtils } from "./com/cahe/utils/StringUtils";
import { LayoutManager } from "./com/cahe/layout/LayoutManager";


export class Init {

    private static _instance : Init ;
    private lm : LayoutManager ;

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
        this.lm = LayoutManager.getInstance();
    }

}

var i : Init = Init.getInstance() ;