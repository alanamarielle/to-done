import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdnTasksComponent } from '../app/routes/tdn-tasks.component';
import { TdnAddTask } from '../app/routes/tdn-add-task';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'tasks', component: TdnTasksComponent },
  { path: '', component: TdnTasksComponent },
  { path: 'addtask', component: TdnAddTask },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
