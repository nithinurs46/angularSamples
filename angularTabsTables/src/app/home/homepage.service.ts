import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }

  homeUrl: string = "http://localhost:8081/ESM_SpringBoot/getHomepage";
  response: any;

  getDBList() : Observable<any>{
    return this.http.get<any>(`${this.homeUrl}`);
  }

  
}
