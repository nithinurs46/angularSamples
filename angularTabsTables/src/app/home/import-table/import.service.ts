import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportService {
  format: string = "02";
  constructor(private http: HttpClient) { }
  importURL: string = "http://localhost:8080/SpringBoot/import";
  response: any;

  getImportCases(pageNo: number, tabSelected: number) : Observable<any>{
    if(tabSelected==0){
      this.format = "02";
    }else if (tabSelected == 1){
      this.format = "05";
    }
    return this.http.post<any>(`${this.importURL}`+`?format=`+this.format+`&pageNo=`+pageNo,{
      //request body
    });
  }

}
