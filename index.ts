declare global {
    interface HTMLElement {
            styles(styles: CSSStyleDeclaration): void;
     }
  }
export default function SimpleCSS(globals:void | CSSStyleDeclaration) {
    if (globals) {
        var el: NodeListOf<HTMLElement> = document.querySelectorAll('*') ;
        for (var i = 0; i < el.length; i++) {
            for (let glob in globals) {
                el[i].style[glob] = globals[glob];
       }
        }
    }
    HTMLElement.prototype.styles = function (styles:CSSStyleDeclaration) {
        for (let style in styles) {
            this.style[style] = styles[style];
        }
    }
    return true;
}