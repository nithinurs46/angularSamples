import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor(private http: HttpClient) { }

  exportURL: string = "http://localhost:8080/SpringBoot/exportSection";
  response: any;

  getExportCases(pageNo: number, tabSelected: number) : Observable<any>{
    return this.http.post<any>(`${this.exportURL}`+`?format=`+tabSelected+`&pageNo=`+pageNo,{
      //request body
    });
  }

}
