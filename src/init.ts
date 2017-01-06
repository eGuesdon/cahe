/// <reference path="../out/com/cahe/utils/MathUtils.d.ts" />
/// <reference path="../out/com/cahe/utils/StringUtils.d.ts" />

import * as Mu from "./com/cahe/utils/Math" ;
import * as Su from "./com/cahe/utils/String" ;

export class Init {

    private static _instance:Init ;

    private constructor(){
        console.log(Mu.com.cahe.utils.MathUtils.SphereVolume(10000)) ;
        console.log(Su.com.cahe.utils.StringUtils.prefill()) ;
        Su.com.cahe.utils.sayHello() ;
    }

    public static getInstance():Init{
        if (Init._instance == null) {
            Init._instance = new Init();
        } ;
        return Init._instance ;
    }

}

var i : Init = Init.getInstance() ;