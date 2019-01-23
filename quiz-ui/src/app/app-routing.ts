import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  { path: 'auth', loadChildren: 'src/app/module/auth.module#AuthModule'}
];

RouterModule.forRoot(routes);
