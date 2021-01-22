import { Component } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'tdn-add-task',
  templateUrl: './tdn-tasks.component.html',
})
export class TdnAddTask {
  todos: Todo[];

  constructor() {}
  ngOnInit() {}
}
