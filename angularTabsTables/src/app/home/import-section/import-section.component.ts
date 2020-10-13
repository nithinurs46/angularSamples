import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-import-section',
  templateUrl: './import-section.component.html',
  styleUrls: ['./import-section.component.css']
})



export class ImportSectionComponent implements OnInit {
  caseData: any;
  breadCumb: MenuItem[];
  home: MenuItem;
  tabIndex:number = 0;
  constructor() {
  }

  ngOnInit() {
    this.breadCumb = [
      {label:'Home'},
      {label:'Import'},
  ];
  this.home = {icon: 'pi pi-home'};
  }
  
  onTabChange(event) {
    this.tabIndex = event.index;
}

}
