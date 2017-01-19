export class SlideShow {


    public static LEFTRIGHT : string = "LeftRight";
    public static RIGHTLEFT : string = "RightLeft";
    public static TOPDOWN : string = "TopDown";
    public static DOWNTOP : string = "DownTop";
    public static FADE : string = "Fade";
    public static CONTINUOUSBROWSING : string = "ContinuousBrowsing";
    public static DISCONTINUOUSBROWSING : string = "DiscontinuousBrowsing" ;
    public static IMGCONTENTTYPE : string = "IMG" 


    private _dataProvider:string[] ;
    private _direction : string ;
    private _index : number = -1 ;
    private _parentContainer : HTMLElement ;
    private _container : HTMLDivElement ;
    private _timelaps : number = 0 ;
    private _interval : any ;
    private _browsingType : string = SlideShow.CONTINUOUSBROWSING ;
    private _transitionType : string = SlideShow.LEFTRIGHT ;
    private _contentType : string = SlideShow.IMGCONTENTTYPE ;


    constructor (parentContainer? : HTMLElement , dataProvider? : string[], direction? : string, timelaps? : number) {
        this._parentContainer = parentContainer ;
        this._direction = direction ;
        this.dataProvider = dataProvider ;
        this._timelaps = timelaps ;

        this.setContainer();
        
    }

    // ==== Public methods ==== \\

    public next() : number {
        this._index = this._index == this._dataProvider.length-1 ? 0 : this._index + 1 ;
        console.log("index = " + this._index) ;
        return this._index ;
    }

    public previous () : number {
        this._index = this._index == 0 ? this._dataProvider.length-1 : this._index - 1 ;
        return this._index ;
    }

    public start ():void {
        if (this._timelaps > 0 ){
            this.setInterval();
        }
        this.next();        
    }

    public stop():void {
        clearInterval(this._interval);
    }

    // ==== Private methods ==== \\

    private setInterval (): void {
        this._interval = setInterval( this.next.bind(this), this._timelaps );
    }

    private setContainer () : void {
        this._container = document.createElement ("div") ;
        this._container.id = "slideshow" ;
        this._parentContainer.appendChild ( this._container );
    }
    
    /**
     * Building content container depends of content type and data provider ;
     */
    private setContentContainer ():void {
        if (!this._dataProvider) return ;

        switch (this._contentType){
            case SlideShow.IMGCONTENTTYPE :
                let l : number = this._dataProvider.length ;
                for (let i : number = 0 ; i < l ; i++){
                    let img : HTMLImageElement = document.createElement ("img");
                        img.id = "IMGContainer" + i ;
                        img.src = this._dataProvider[i];
                    this._container.appendChild (img);
                }
                break ;
            default :
                return ;
        }
    }

    // ==== Accessor ==== \\

    public set timeLaps (value : number ) {
        this._timelaps = value ;
    }

    public set transitionType (value : string ) {
        if (value != SlideShow.DOWNTOP || value != SlideShow.FADE || value != SlideShow.LEFTRIGHT || value != SlideShow.RIGHTLEFT || value != SlideShow.TOPDOWN ){
            throw new Error("This type of transition is not yet supported") ;
        }
        this._transitionType = value ;
    }

    public set browsingType (value : string ) {
        if (value != SlideShow.CONTINUOUSBROWSING || value != SlideShow.DISCONTINUOUSBROWSING){
            throw new Error ("This type of browsing SlideShow is not yet supported") ;
        }
        this._browsingType = value ;
    }

    public set contentType (value : string ){
        if (value != SlideShow.IMGCONTENTTYPE ){
            throw new Error ("This type of content is not yet supported") ;
        }
        this._contentType = value ;
        this.setContainer () ;
    }

    public set dataProvider ( value : string[]){
        this._dataProvider = value ;
        this.setContainer ();
    }

}
