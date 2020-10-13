import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  userName : String = "";
  response: any;
  constructor(private http: HttpClient) {
    
   }

  ngOnInit() {
  }

  search(){
    this.http.get("https://api.github.com/users/"+this.userName)
    .subscribe((response) => {
      this.response = response;
    })
  }
}
