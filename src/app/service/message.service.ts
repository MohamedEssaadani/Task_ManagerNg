import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new Subject();

  constructor() { }

  setMessage(message)
  {
     this.subject.next(message);
  }

  getMessage()
  {
    return this.subject.asObservable();
  }
}
