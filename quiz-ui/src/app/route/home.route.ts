import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from '../component/home/HomeComponent.component';

export const routes: Routes = [
  { path: 'default', component: HomeComponent }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
