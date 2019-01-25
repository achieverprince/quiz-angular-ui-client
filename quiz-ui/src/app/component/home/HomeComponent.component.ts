import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/Auth.service';

@Component({
  templateUrl: '../../ui/home/home.html',
  styleUrls: ['../../ui/home/home.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngOnInit() {

  }
  ngAfterViewInit() {

  }
  constructor(private _router: Router, private _ativeRouter: ActivatedRoute, private authService: AuthService) {
  }
}
