
// export module utils { 
    export class StringUtils {

        /**
         * 
         */
        public static prefill(stringChain:string, prefillChar:string, finalLength:number):string{
            
            let len :number = stringChain.length;
            if (len >= finalLength){
                return stringChain;
            }

            let gap : number = finalLength - len ;
            let prefillChain : string = "" ;
            for (let i:number = 0 ; i < gap ; i++) {
                prefillChain += prefillChar ;
            }
            
            return prefillChain + stringChain ;
        }

        /**
         * 
         */
        public static prefillWith (stringChain:string, prefillChain:string):string{
            return prefillChain + stringChain ;
        }

    }
// }