import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';
  
  constructor(private router : Router, private loginService : LoginService) { }

  ngOnInit(): void {
  }

  login(e)
  {
    //cancel the submit event to make it as default (before submitting) cuz his event changed now
    e.preventDefault();
    //take the elemnent that triggered the event (form)
    //const target = e.target;
   
    const response = this.loginService.login(this.username, this.password);

    alert(response.message);
    if(response.status === 200)
    {
      this.router.navigateByUrl('tasks');
      return;
    }
  }
}
