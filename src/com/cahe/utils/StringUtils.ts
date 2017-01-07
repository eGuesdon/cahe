namespace com {
    export namespace cahe {
        export namespace utils {
            export class StringUtils {
        
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

            }
            export function sayHello():string{
                return "je suis dans le module com.cahe.utils, je me nomme sayHello et je suis une fonction" ;
            }
        }
    }
}