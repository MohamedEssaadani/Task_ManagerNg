import { Injectable } from '@angular/core';
import { Headers, RequestOptions} from '@angular/http';
import { Task } from '../Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  headers: Headers =  new Headers();
  options: any;
  apiServer : string = 'http://localhost:8000/';
  constructor(private http: HttpClient) { 
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHTTpRequest');

    this.options = new RequestOptions({headers:this.headers});
  }

  addTask(title):Observable<Task>
  {
    const task = new Task(title);
    //post the object to the api & then return the new object to the component that call this method
    return this.http.post<Task>(this.apiServer+'postTask',task);
  }

 getAllTasks():Observable<Task[]>
  {
    return this.http.get<Task[]>(this.apiServer+'get');
  }
  
  

  deleteTask(id):Observable<Task>
  {
    const task = {
      id:id,
      title:'',
      status: false,
      date: new Date()
    };
    return this.http.post<Task>(this.apiServer+'delete', task);
  }
  

  getTask(id):Observable<Task>
  {
    const task = {
      id:id,
      title:'',
      status: false,
      date: new Date()
    }
    return this.http.post<Task>(this.apiServer+'getTask', task);
  }
}
