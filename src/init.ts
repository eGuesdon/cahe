import MathUtils = com.cahe.utils.MathUtils ;
import StringUtils = com.cahe.utils.StringUtils;
import sayHello = com.cahe.utils.sayHello;

export class Init {

    private static _instance:Init ;

    private constructor(){
        document.body.innerHTML = "bonjour";
    }

    public static getInstance():Init{
        if (Init._instance == null) {
            Init._instance = new Init();
        } ;
        return Init._instance ;
    }

}

var i : Init = Init.getInstance() ;