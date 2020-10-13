import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anotherApp';
  constructor(private svc:TestService, private http:HttpClient){
    svc.printData("print service data");
  }

  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/mojombo');
    obs.subscribe((response) => console.log("got the response: "+response));
  }
}
