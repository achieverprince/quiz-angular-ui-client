import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class APIService {

  constructor(private http: HttpClient) {

  }

  GetAPIURL (api: string) {
    return environment.APIEndpoint + api;
  }
}
