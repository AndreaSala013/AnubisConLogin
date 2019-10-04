import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import {  tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = "http://localhost:6060/testSpring/login";

  constructor(private http: HttpClient) { }

  getKeycloakTokens(username:string,password:string) {
    console.log("getKeycloakTokens");
    let headers = new HttpHeaders().set("Access-Control-Allow-Origin",'*');
    let params = new HttpParams()
      .set("username", username)
      .set("password", password);

    let url = this.baseUrl;
    return this.http
      .get( url, {headers, params})
      .pipe(
        tap(value=>console.log(value))
      )
      .toPromise();

    /*return this.http
      .get<KeycloakTokens>(url, { params })
      .pipe(
        tap(value => {
          this.filmsInfo = value
        }),
        map(res => res.results),
        tap(value => console.log("dopo map", value))
      )
      .toPromise();*/
  }
}
