import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {APIService} from './API.service';
import {API} from '../model/API';
import {catchError} from 'rxjs/operators';
import {Config} from 'protractor';
import {AuthResponseConfig} from '../model/AuthResponseConfig';
import {isNullOrUndefined} from 'util';

const authHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Injectable()
export class AuthService {
  authorizationToken: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  config: Config;

  constructor(private http: HttpClient, private apiService: APIService) {

  }

  LoginUser (data: any): Observable<any> {
    const body = {userName: data.userName, password: data.password};
    return this.http.post<any>(this.apiService.GetAPIURL(API.login),
      {userName: data.userName, password: data.password}, authHttpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getAuthorizationToken() {
    return isNullOrUndefined(this.authorizationToken) ? '' : this.authorizationToken;
  }

  setAuthorizationToken(token) {
    this.authorizationToken = token;
  }
}

