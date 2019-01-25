import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  { path: 'auth', loadChildren: 'src/app/module/auth.module#AuthModule'},
  { path: 'home', loadChildren: 'src/app/module/home.module#HomeModule'}
];

RouterModule.forRoot(routes);
