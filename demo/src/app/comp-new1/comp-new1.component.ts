import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-new1',
  templateUrl: './comp-new1.component.html',
  styleUrls: ['./comp-new1.component.css']
})
export class CompNew1Component implements OnInit {

  dateMessage: string = new Date().toDateString();
  someNumber: number = 10;
  constructor() { 
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' '+ currentDate.toLocaleTimeString();
    } ,1000);
    
  }
  ngOnInit() {
  }

  addTwoNumbers(a:number, b:number){
    return a+b;
  }



}
