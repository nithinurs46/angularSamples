import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user1: any;
  @Input('name') userName : string;
  constructor() { 
   
  }

  ngOnInit() {
    this.user1 = {
      name: this.userName,
      email: 'ABD@gmail.com',
      phone: [
        '9900887711',
        '4759437508'
      ]
    };
  }

}
