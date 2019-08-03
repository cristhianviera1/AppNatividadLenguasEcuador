import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AplicationServiceService {

  constructor(private http: HttpClient) { }

  

  getComunidades(){
    this.http.get("");
  }
}
