import { Component, h, Prop } from '@stencil/core';
import { Todo } from 'apps/web/src/app/interfaces/todo';

@Component({
  tag: 'tdn-card',
  shadow: true,
  styleUrl: 'tdn-card.scss',
})
export class TdnCard {
  @Prop() todo: Todo;

  render() {
    return (
      <div class="card">
        <p>{this.todo.taskName}</p>
        <p>{this.todo.taskName}</p>
        <p>{this.todo.taskName}</p>
        <p>{this.todo.taskName}</p>
        <p>{this.todo.taskName}</p>
        <p>{this.todo.taskName}</p>
      </div>
    );
  }
}
