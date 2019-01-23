import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from '../component/auth/LoginComponent.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
