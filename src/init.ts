
export class Init {

    private static _instance:Init

    private constructor(){}

    public static getInstance():Init{
        if (Init._instance == null) {
            Init._instance = new Init();
        }
        return Init._instance ;
    }

}