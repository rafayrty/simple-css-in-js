declare global {
    interface HTMLElement {
            styles(styles: CSSStyleRule): void;
     }
  }
export function SimpleCSS(globals:void | CSSStyleRule) {
    if (globals) {
        var el: NodeListOf<HTMLElement> = document.querySelectorAll('*') ;
        for (var i = 0; i < el.length; i++) {
            for (let glob in globals) {
                el[i].style[glob] = globals[glob];
       }
        }
    }
    HTMLElement.prototype.styles = function (styles:CSSStyleRule) {
        for (let style in styles) {
            this.style[style] = styles[style];
        }
    }
    return true;
}