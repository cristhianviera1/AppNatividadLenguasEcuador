import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AplicationServiceService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(environment.API_URL+url);
  }
  post(url: string, data: any) {
    return this.http.post(environment.API_URL+url, data);
  }
  put(url: string, data: any) {
    return this.http.put(environment.API_URL+url,data);
  }
  delete(url: string) {
    return this.http.delete(environment.API_URL+url);
  }

  getComunidades(){
    this.http.get("");
  }
}
