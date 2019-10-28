import { Component, OnInit } from '@angular/core';
import {Task} from '../../shared/entity/task.entity';
import {TodoApiService} from '../../shared/todo-api.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {

  taskModel = new Task('', '');

  constructor(private todoApi: TodoApiService) { }

  ngOnInit() {
  }

  addTask() {

    this.todoApi.addTask(this.taskModel).subscribe(next => {
      this.taskModel.name = '';
      this.taskModel.description = '';
    });
  }

}
