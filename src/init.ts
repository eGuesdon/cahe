/// <reference path="./com/cahe/utils/MathUtils.ts" />
/// <reference path="./com/cahe/utils/StringUtils.ts" />

import StringUtils = com.cahe.utils.StringUtils;

export class Init {

    private static _instance:Init ;

    private constructor(){
        console.log(StringUtils.prefill("Eric", "0", 10)) ;
        document.body.innerHTML = StringUtils.prefill("Eric", "0", 10) ;
    }

    public static getInstance():Init{
        if (Init._instance == null) {
            Init._instance = new Init();
        } ;
        return Init._instance ;
    }

}

var i : Init = Init.getInstance() ;