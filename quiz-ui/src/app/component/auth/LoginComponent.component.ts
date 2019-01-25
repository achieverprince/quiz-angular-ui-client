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
  error : boolean = false;
  ngOnInit() {

  }
  ngAfterViewInit() {
    this.authService.setAuthorizationToken(localStorage.getItem('authToken'));
    if (this.authService.getAuthorizationToken().length > 0) {
      this._router.navigateByUrl('/home/default');
    }
  }
  constructor(private _router: Router, private _ativeRouter: ActivatedRoute, private authService: AuthService) {
  }

  LoginUser() {
    const loginData: Object = {
      userName: this.userName,
      password: this.password
    };
    this.error = false;
    this.authService.LoginUser(loginData).subscribe(resp => {
      const authorizationToken: string = resp.headers.get('Authorization');
      this.authService.setAuthorizationToken(authorizationToken);
      localStorage.setItem('authToken', authorizationToken);
      this._router.navigateByUrl('/home/default');
    }, error => {
      this.error = true;
      console.log(error);
    });
  }
}
