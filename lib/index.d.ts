declare global {
    interface HTMLElement {
        styles(styles: CSSStyleRule): void;
    }
}
export declare function SimpleCSS(globals: void | CSSStyleRule): boolean;
