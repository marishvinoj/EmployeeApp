import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.login('Marish','123456');
  }

}
