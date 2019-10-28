import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Task} from './entity/task.entity';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private httpClient: HttpClient) { }

  fetchTasks(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'tasks');
  }

  deleteTask(id: string): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + 'tasks/' + id);
  }

  addTask(task: Task): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'tasks/', task);
  }

  updateTask(task: Task): Observable<any> {
    return this.httpClient.put(environment.apiUrl + 'tasks/' + task.id, task);
  }

}
