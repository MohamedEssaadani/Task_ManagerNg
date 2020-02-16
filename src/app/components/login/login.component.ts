import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  login(e)
  {
    //cancel the submit event to make it as default (before submitting) cuz his event changed now
    e.preventDefault();
    //take the elemnent that triggered the event (form)
    const target = e.target;
    const name   = target.querySelector('#username').value;
    const password   = target.querySelector('#password').value;
   
    if(name === password)
    {
      this.router.navigateByUrl('tasks');
    }
  }
}
