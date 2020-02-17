import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username, password)
  {
    if(username === password)
    {
      return {
        status  : 200,
        message : "Login Successed"
      };
    }
    return {
      status  : 202,
      message : "Username or password is invalid!!"
    };
  }
}
