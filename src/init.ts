import MathUtils = com.cahe.utils.MathUtils ;
import StringUtils = com.cahe.utils.StringUtils;
import UserModel = com.cahe.utils.UserModel;

export class Init {

    private static _instance:Init ;
    private _um : UserModel ;

    private constructor(){
        
    }

    public static getInstance():Init{
        if (Init._instance == null) {
            Init._instance = new Init();
        } ;
        return Init._instance ;
    }

}

var i : Init = Init.getInstance() ;