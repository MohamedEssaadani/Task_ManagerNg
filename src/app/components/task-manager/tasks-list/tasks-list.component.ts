import { Component, OnInit } from '@angular/core';
import { Task } from '../../../Task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasksList :Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks()
  {
    this.taskService.getAllTasks().subscribe((data)=>{
      this.tasksList = data;
    }
    );
  }
}
