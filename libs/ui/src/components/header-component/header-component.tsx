import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'header-component',
  shadow: true,
  styleUrl: 'header-component.scss',
})
export class HeaderComponent {
  @Prop()
  render() {
    return (
      <div class="top-bar">
        <div class="home">
          <tdn-ui-icon name="logo" size="s" color="color-green"></tdn-ui-icon>
          <span>To Done</span>

          {/* <a routerLink="/tasks">Tasks</a> */}
        </div>
      </div>
    );
  }
}
