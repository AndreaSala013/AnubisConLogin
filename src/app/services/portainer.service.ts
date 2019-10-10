import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { PortainerToken } from '../model/PortainerToken';
import { environment } from 'src/environments/environment.prod';
import {  tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PortainerService {

  constructor(private http: HttpClient) { }

  getPortainerToken():Promise<PortainerToken> {
    const body = {Username: environment.portainerUser, Password: environment.portainerPassword};
    
    let headers = new HttpHeaders()
    .set("Content-Type","application/json");

    let url = environment.portainerTokenUrl;
    return this.http
    .post<PortainerToken>(url, body, {headers})
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
