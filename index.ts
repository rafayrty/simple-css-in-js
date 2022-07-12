declare global {
    interface HTMLElement {
        styles<T extends Partial<CSSStyleDeclaration>>(styles: T): void;
     }
  }
export default function SimpleCSS<T extends Partial<CSSStyleDeclaration>>(globals: T | void){
        var el: NodeListOf<HTMLElement> = document.querySelectorAll('*');
        for (var i = 0; i < el.length; i++) {
            for (let glob in globals as T) {
                el[i].style[glob] = globals[glob];
        }
    }
    
    HTMLElement.prototype.styles = function <T extends Partial<CSSStyleDeclaration>>(styles:T) {
        for (let style in styles) {
            this.style[style] = styles[style];
        }
    }
    return true;
}
