declare global {
    interface HTMLElement {
        styles<T extends Partial<CSSStyleDeclaration>>(styles: T): void;
    }
}
export default function SimpleCSS<T extends Partial<CSSStyleDeclaration>>(globals: void | T): boolean;
