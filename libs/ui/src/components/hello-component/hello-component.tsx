import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hello-component',
  shadow: true,
  styleUrl: 'hello-component.scss',
})
export class HelloComponent {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <p>
        My name is <span class="purple">{this.name}</span>
      </p>
    );
  }
}
