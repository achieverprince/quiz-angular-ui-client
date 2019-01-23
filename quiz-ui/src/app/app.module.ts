import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APIService} from './service/API.service';
import {AuthService} from './service/Auth.service';
import {AuthInterceptor} from './interceptor/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    APIService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true // Add this line when using multiple interceptors.
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
