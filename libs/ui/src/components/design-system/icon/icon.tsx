import {
  Build,
  Component,
  Element,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { IconColor, IconSizes } from './icon.interface';
import { getSvgContent } from './request';
import { getName, getUrl } from './utils';

@Component({
  tag: 'tdn-ui-icon',
  assetsDirs: ['icons'],
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {
  private io?: IntersectionObserver;

  @Element() el!: HTMLElement;

  @State() private svgContent?: string;
  @State() private isVisible = false;

  /**
   * Specifies the label to use for accessibility. Defaults to the icon name.
   */
  @Prop({ mutable: true, reflect: true }) ariaLabel?: string;

  /**
   * Specifies which icon to use from the built-in set of icons.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * The size of the icon: xxs through xl
   */
  @Prop({ reflect: true }) size?: IconSizes;

  @Prop() color: IconColor;

  /**
   * If enabled, icon will be loaded lazily when it's visible in the viewport.
   * Default, `false`.
   */
  @Prop() lazy = false;

  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }

  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  private waitUntilVisible(
    el: HTMLElement,
    rootMargin: string,
    cb: () => void
  ) {
    if (
      Build.isBrowser &&
      this.lazy &&
      typeof window !== 'undefined' &&
      (window as any).IntersectionObserver
    ) {
      const io = (this.io = new (window as any).IntersectionObserver(
        (data: IntersectionObserverEntry[]) => {
          if (data[0].isIntersecting) {
            io.disconnect();
            this.io = undefined;
            cb();
          }
        },
        { rootMargin }
      ));

      io.observe(el);
    } else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }

  @Watch('name')
  loadIcon() {
    if (Build.isBrowser && this.isVisible) {
      const url = getUrl(this);
      if (url) {
        getSvgContent(url).then((svgContent) => (this.svgContent = svgContent));
      }
    }

    if (!this.ariaLabel) {
      const label = getName(this.name);
      // user did not provide a label
      // come up with the label based on the icon name
      if (label) {
        this.ariaLabel = label
          .replace('ios-', '')
          .replace('md-', '')
          .replace(/\-/g, ' ');
      }
    }
  }

  render() {
    const style = {};
    if (this.color) {
      style['--color'] = `var(--${this.color})`;
    }
    return (
      <Host role="img" style={style}>
        {Build.isBrowser && this.svgContent ? (
          <div class="icon-inner" innerHTML={this.svgContent}></div>
        ) : (
          <div class="icon-inner"></div>
        )}
      </Host>
    );
  }
}
