import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../Task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task:Task;
  constructor(private router:ActivatedRoute, private taskService:TaskService) { }

  ngOnInit(): void {
    this.router.params.subscribe(data=>{
      this.taskService.getTask(data.id).subscribe(task=>{
        this.task = task;
      })
    });
  }

}
