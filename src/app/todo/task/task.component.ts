import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../shared/entity/task.entity';
import {TodoApiService} from '../../shared/todo-api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() emitter = new EventEmitter();
  isLoading: boolean;

  constructor(private todoApi: TodoApiService) { }

  ngOnInit() {

  }

  deleteTask() {

    this.isLoading = true;

    this.todoApi.deleteTask(this.task.id).subscribe(
      () => {
        this.emitter.emit('success');
        this.isLoading = false;
      }, () => {
        console.log(this.task.id, 'delete failed');
        this.isLoading = false;
      }
    );
  }

  updateTask() {
    this.todoApi.updateTask(this.task).subscribe();
  }


}
