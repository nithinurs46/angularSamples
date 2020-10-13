import { Component, OnInit, Input } from '@angular/core';
import { ExportService } from './export.service';

export interface ExportCases {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: number;
}

const tab1Data: ExportCases[] = [
  {
    col1: 'Tab 1 col1_001',
    col2: 'Tab 1 col2_001',
    col3: 'Tab 1 col3_001',
    col4: 'Tab 1 col4_001',
    col5: 1,
  },
  {
    col1: 'Tab 1 col1_002',
    col2: 'Tab 1 col2_002',
    col3: 'Tab 1 col3_002',
    col4: 'Tab 1 col4_004',
    col5: 2,
  },
  {
    col1: 'Tab 1 col1_003',
    col2: 'Tab 1 col2_003',
    col3: 'Tab 1 col3_003',
    col4: 'Tab 1 col4_003',
    col5: 3,
  },
  {
    col1: 'Tab 1 col1_004',
    col2: 'Tab 1 col2_004',
    col3: 'Tab 1 col3_004',
    col4: 'Tab 1 col4_004',
    col5: 4,
  },
  
];

const tab2Data: ExportCases[] = [
  {
    col1: 'Tab 2 col1_001',
    col2: 'Tab 2 col2_001',
    col3: 'Tab 2 col3_001',
    col4: 'Tab 2 col4_001',
    col5: 1,
  },
  {
    col1: 'Tab 2 col1_002',
    col2: 'Tab 2 col2_002',
    col3: 'Tab 2 col3_002',
    col4: 'Tab 2 col4_004',
    col5: 2,
  },
  {
    col1: 'Tab 2 col1_003',
    col2: 'Tab 2 col2_003',
    col3: 'Tab 2 col3_003',
    col4: 'Tab 2 col4_003',
    col5: 3,
  },
  {
    col1: 'Tab 2 col1_004',
    col2: 'Tab 2 col2_004',
    col3: 'Tab 2 col3_004',
    col4: 'Tab 2 col4_004',
    col5: 4,
  },
  
];

@Component({
  selector: 'app-export-table',
  templateUrl: './export-table.component.html',
  styleUrls: ['./export-table.component.css']
})
export class ExportTableComponent implements OnInit {
  caseData:any;
  totalRecords: number;
  page:number = 1;
  pageSize:number = 5;

  @Input() selectedTab: any;
  
  constructor(private expSvc: ExportService) { }

  ngOnInit() {
    console.log("Selected tab in table:- "+this.selectedTab);
    this.getExportData();
  }

  loadPage(event){
    this.getExportData();
  }

  getExportData(){
    /*this.expSvc.getExportCases(this.page,this.selectedTab).subscribe((response) => {
      this.caseData = response.recList;
      this.totalRecords = response.totalCount;
    });*/
    if(this.selectedTab =='01'){
      this.caseData = tab1Data;
      this.totalRecords = 4;
    } else if (this.selectedTab =='02'){
      this.caseData = tab2Data;
      this.totalRecords = 4;
    }
    
  }

}
