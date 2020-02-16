import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../../service/task.service';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  title: string;

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
  }

  addTask(e)
  {
    e.preventDefault();
;    this.taskService.addTask(this.title).subscribe((data)=>{
      console.log('Task Added');
    });
  }
}
