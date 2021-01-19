import { Component } from '@angular/core';
import { Todo } from './interfaces/todo';

@Component({
  selector: 'tdn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [
    {
      taskName: 'string',
      thumbnail: 'string',
      description: 'string',
      labels: 'string',
      dueDate: 2,
      notes: 'string',
    },
    {
      taskName: 'second string',
      thumbnail: 'second string',
      description: 'second string',
      labels: 'second string',
      dueDate: 8,
      notes: 'second string',
    },
  ];
}
