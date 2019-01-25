import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {routing} from '../route/home.route';
import {HomeComponent} from '../component/home/HomeComponent.component';

@NgModule({
  imports: [routing, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
