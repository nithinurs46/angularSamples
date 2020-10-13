import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ImportService } from './import.service';
import { LazyLoadEvent } from 'primeng/api';


export interface ImportCases {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: number;
}

const tab1Data: ImportCases[] = [
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

const tab2Data: ImportCases[] = [
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
  selector: 'app-import-table',
  templateUrl: './import-table.component.html',
  styleUrls: ['./import-table.component.css']
})


export class ImportTableComponent implements  OnChanges {
  caseData: any;
  importCases: ImportCases[];
  cols: any[];
  msgNoFilter: any;
  selectedCases: ImportCases[];
  totalRecords: number;
  loading: boolean = false;
  
  
  @Input() selectedTab: number;
  
  constructor(private impSvc: ImportService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.cols = [
      { field: 'col1', header: 'Column 1' },
      { field: 'col2', header: 'Column 2' },
      { field: 'col3', header: 'Column 3' },
      { field: 'col4', header: 'Column 4' }
    ];
    this.loadImportCasesLazy(null);
  }
  loadImportCasesLazy(event: LazyLoadEvent) {
    this.loading = true;
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    let lastIndex = 0;
    let recPerPage = 10;
    let currPageNo = 1;
    if(event !=null){
     lastIndex = event.first;
     recPerPage = event.rows;
     currPageNo = lastIndex/recPerPage + 1;
  } 
  /*this.impSvc.getImportCases(currPageNo,this.selectedTab).subscribe((response) => {
    this.caseData = response.recList;
    console.log(this.caseData);
    this.totalRecords = response.totalCount;
    this.loading = false;
  });*/
  if(this.selectedTab==0){
    this.caseData = tab1Data;
    this.totalRecords = 4;
  } else if(this.selectedTab==1){
    this.caseData = tab2Data;
    this.totalRecords = 4;
  }
  this.loading = false;
  }
}
