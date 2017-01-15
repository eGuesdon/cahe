import { IContainer } from "./IContainer";

export class Container implements IContainer{

    protected _container : HTMLElement ;
    protected _parentContainer : HTMLElement ;

    protected openDirection : string ;
    protected closeDirection : string ;

    protected constructor (){}

// ===== Public Method ===== \\    

    public displayContainer (target:HTMLElement): HTMLElement {
        this._parentContainer = target ;
        this._parentContainer.appendChild (this._container) ;
        return this.container ;
    }

    /**
     * Assure la transition lors de l'ouverture
     */
    public openContainer (): HTMLElement {
        return this.container ;
    }

    /**
     * Assure la transition lors de la fermeture
     */
    public closeContainer ():HTMLElement{
        return this.container ;
    }
    
    /**
     * Cache le container sans transition
     */
    public hideContainer (): HTMLElement {
        return this.container ;
    }

    /**
     * Supprime de container du container Parent sans transition
     */
    public removeContainer (): void {
        this._parentContainer.removeChild (this.container);
    }


    public get container ():HTMLElement {
        return this._container ;
    }

}