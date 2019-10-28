import {Component, OnInit} from '@angular/core';
import {TodoApiService} from '../../shared/todo-api.service';
import {Task} from '../../shared/entity/task.entity';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Array<Task>;
  isLoading: boolean;

  constructor(private todoApi: TodoApiService) { }

  ngOnInit() {
    this.fetchTasks();

  }

  fetchTasks() {
    this.isLoading = true;

    this.todoApi.fetchTasks().subscribe(data => {
      this.todoList = data;
      this.isLoading = false;
    });
  }

}
