import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../../service/task.service';
import { MessageService } from '../../../service/message.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  title: string;
  formSubmitted : boolean = false;

  constructor(private taskService : TaskService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addTask(e)
  {
    this.formSubmitted = true;
    e.preventDefault(); 
    this.taskService.addTask(this.title).subscribe((data)=>{
      this.title='';
      this.messageService.setMessage('new task');
    });
  }
}
