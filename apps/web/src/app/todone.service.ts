import { Injectable } from '@angular/core';
import { Todo } from 'apps/web/src/app/interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoneService {
  private todos: Todo[] = [
    {
      taskName: 'finish this project',
      thumbnail: 'string',
      description: 'string',
      labels: 'string',
      dueDate: 2,
      notes: 'string',
    },
    {
      taskName: 'eat brunch',
      thumbnail: 'second string',
      description: 'second string',
      labels: 'second string',
      dueDate: 8,
      notes: 'second string',
    },
    {
      taskName: 'walk the unicorn',
      thumbnail: 'second string',
      description: 'second string',
      labels: 'second string',
      dueDate: 8,
      notes: 'second string',
    },
    {
      taskName: 'go to the store',
      thumbnail: 'second string',
      description: 'second string',
      labels: 'second string',
      dueDate: 8,
      notes: 'second string',
    },
  ];
  constructor() {}

  getTodos = () => {
    return this.todos;
  };
}
