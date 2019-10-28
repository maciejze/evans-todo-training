import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TaskComponent} from './task/task.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {SharedModule} from '../shared/shared.module';
import {AddTaskFormComponent} from './add-task-form/add-task-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, TodoListComponent, AddTaskFormComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TodoModule {}
