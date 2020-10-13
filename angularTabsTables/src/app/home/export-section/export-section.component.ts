import { Component, OnInit } from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-export-section',
  templateUrl: './export-section.component.html',
  styleUrls: ['./export-section.component.css']
})
export class ExportSectionComponent implements OnInit {
  tabIndex:any = "02";
  constructor(alertConfig: NgbAlertConfig) { 
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

  ngOnInit() {
    
  }
  onTabChange(event: any) {
    this.tabIndex = event.nextId
    console.log(this.tabIndex);
  }
}
