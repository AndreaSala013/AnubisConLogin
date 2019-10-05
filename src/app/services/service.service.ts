import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import {  tap } from "rxjs/operators";
import { ServletResponse } from '../model/ServletResponde';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = "http://localhost:6060/testSpring/login";

  constructor(private http: HttpClient) { }

  getKeycloakTokens(username:string,password:string):Promise<ServletResponse> {
    console.log("getKeycloakTokens");
    let params = new HttpParams()
      .set("username", username)
      .set("password", password);

    let url = this.baseUrl;
    return this.http
      .get<ServletResponse>( url, { params})
      .pipe(
        tap(value=>console.log(value))
      )
      .toPromise();
  }
}
