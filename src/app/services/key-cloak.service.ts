import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {  tap } from "rxjs/operators";
import { KeycloakTokens } from '../model/KeycloakTokens';



@Injectable({
  providedIn: 'root'
})
export class KeyCloakService {

  constructor(private http: HttpClient) { }

  getKeycloakTokens(username:string,password:string):Promise<KeycloakTokens> {
    let params = new HttpParams()
    .set("grant_type", "password")
    .set("client_id", environment.keycloakClient)
    .set("client_secret", environment.keycloakCLientSecret)
    .set("username", username)
    .set("password", password);
    
    let headers = new HttpHeaders()
    .set("Content-Type","application/x-www-form-urlencoded");

    let url = environment.keycloakTokenUrl;
    return this.http
      .post<KeycloakTokens>( url, params, { headers})
      .pipe(
        tap(value=>console.log(value))
      )
      .toPromise()
      .catch(err=>{
        console.log(err);
        return null;
        
      });
  }
}
