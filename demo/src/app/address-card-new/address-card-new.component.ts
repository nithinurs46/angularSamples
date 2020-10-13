import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from './user.model';

@Component({
  selector: 'app-address-card-new',
  templateUrl: './address-card-new.component.html',
  styleUrls: ['./address-card-new.component.css']
})
export class AddressCardNewComponent implements OnInit {

  userNew: any;
  @Input('user') userObj : UserModel;

  isCollapsed: boolean = true;
  
  constructor() { }

  ngOnInit() {
    this.userNew = {
      name: this.userObj.name,
      address: this.userObj.address,
      phone: this.userObj.phoneNumber
    };
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

 

}
