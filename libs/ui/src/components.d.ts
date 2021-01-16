/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconColor, IconSizes } from "./components/design-system/icon/icon.interface";
export namespace Components {
    interface HeaderComponent {
    }
    interface HelloComponent {
        "name": string;
    }
    interface TdnUiIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        "color": IconColor;
        /**
          * If enabled, icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy": boolean;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * The size of the icon: xxs through xl
         */
        "size"?: IconSizes;
    }
}
declare global {
    interface HTMLHeaderComponentElement extends Components.HeaderComponent, HTMLStencilElement {
    }
    var HTMLHeaderComponentElement: {
        prototype: HTMLHeaderComponentElement;
        new (): HTMLHeaderComponentElement;
    };
    interface HTMLHelloComponentElement extends Components.HelloComponent, HTMLStencilElement {
    }
    var HTMLHelloComponentElement: {
        prototype: HTMLHelloComponentElement;
        new (): HTMLHelloComponentElement;
    };
    interface HTMLTdnUiIconElement extends Components.TdnUiIcon, HTMLStencilElement {
    }
    var HTMLTdnUiIconElement: {
        prototype: HTMLTdnUiIconElement;
        new (): HTMLTdnUiIconElement;
    };
    interface HTMLElementTagNameMap {
        "header-component": HTMLHeaderComponentElement;
        "hello-component": HTMLHelloComponentElement;
        "tdn-ui-icon": HTMLTdnUiIconElement;
    }
}
declare namespace LocalJSX {
    interface HeaderComponent {
    }
    interface HelloComponent {
        "name"?: string;
    }
    interface TdnUiIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        "color"?: IconColor;
        /**
          * If enabled, icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy"?: boolean;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * The size of the icon: xxs through xl
         */
        "size"?: IconSizes;
    }
    interface IntrinsicElements {
        "header-component": HeaderComponent;
        "hello-component": HelloComponent;
        "tdn-ui-icon": TdnUiIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "header-component": LocalJSX.HeaderComponent & JSXBase.HTMLAttributes<HTMLHeaderComponentElement>;
            "hello-component": LocalJSX.HelloComponent & JSXBase.HTMLAttributes<HTMLHelloComponentElement>;
            "tdn-ui-icon": LocalJSX.TdnUiIcon & JSXBase.HTMLAttributes<HTMLTdnUiIconElement>;
        }
    }
}
