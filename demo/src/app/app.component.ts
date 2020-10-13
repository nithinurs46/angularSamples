import { Component } from '@angular/core';
import { UserModel } from './address-card-new/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userNew : UserModel;
  inputText : String = "intial value";
  constructor(){
    this.userNew  = new UserModel();
    this.userNew.name = 'new user name ## @@ **';
    this.userNew.address = 'Mysore';
    this.userNew.phoneNumber = [
      '12121212',
      '34534545',
    ]
  }

}
