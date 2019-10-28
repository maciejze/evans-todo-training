import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {AddTaskFormComponent} from './add-task-form/add-task-form.component';


const routes: Routes = [{
  path: 'todo-list',
  component: TodoListComponent
}, {
  path: 'add-task',
  component: AddTaskFormComponent
}, {
  path: '',
  redirectTo: 'todo-list',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
