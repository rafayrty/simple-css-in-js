"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SimpleCSS(globals) {
    var el = document.querySelectorAll('*');
    for (var i = 0; i < el.length; i++) {
        for (var glob in globals) {
            el[i].style[glob] = globals[glob];
        }
    }
    HTMLElement.prototype.styles = function (styles) {
        for (var style in styles) {
            this.style[style] = styles[style];
        }
    };
    return true;
}
exports.default = SimpleCSS;
