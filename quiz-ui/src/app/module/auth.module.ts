import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoginComponent} from '../component/auth/LoginComponent.component';
import {routing} from '../route/auth.route';

@NgModule({
  imports: [routing, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [LoginComponent]
})
export class AuthModule {}
