import { Component } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoneService } from '../todone.service';

@Component({
  selector: 'tdn-tasks',
  templateUrl: './tdn-tasks.component.html',
})
export class TdnTasksComponent {
  todos: Todo[];

  constructor(private todoneService: TodoneService) {}
  ngOnInit() {
    this.todos = this.todoneService.getTodos();
  }
}
