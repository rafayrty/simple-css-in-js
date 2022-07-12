declare global {
    interface HTMLElement {
        styles(styles: CSSStyleDeclaration): void;
    }
}
export default function SimpleCSS(globals: void | CSSStyleDeclaration): boolean;
