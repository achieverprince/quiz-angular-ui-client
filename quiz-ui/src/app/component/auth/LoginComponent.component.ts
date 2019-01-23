import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/Auth.service';

@Component({
  templateUrl: '../../ui/auth/login.html',
  styleUrls: ['../../ui/auth/login.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  userName: string = '';
  password: string = '';
  ngOnInit() {

  }
  ngAfterViewInit() {
  }
  constructor(private _router: Router, private _ativeRouter: ActivatedRoute, private authService: AuthService) {
  }

  LoginUser() {
    const loginData: Object = {
      userName: this.userName,
      password: this.password
    };
    this.authService.LoginUser(loginData).subscribe(resp => {
      const keys = resp.headers.keys();
      const headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
      console.log(headers);
    });
  }
}
