module.exports = function SimpleCSS(globals = false) {

    if (globals) {

        var el = document.querySelectorAll('*');
        for (var i = 0; i < el.length; i++) {
            for (let glob in globals) {
                el[i].style[glob] = globals[glob];
            }
        }

    }
    HTMLElement.prototype.styles = function (styles) {
        for (let style in styles) {
            this.style[style] = styles[style];
        }
    }
    return true;
}