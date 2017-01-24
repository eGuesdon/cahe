export class HTMLElementFactory {

    private constructor(){}
    
    public static getHTMLElement (elementName:string):HTMLElement {
        return document.createElement(elementName);
    } 

} 