import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() userId: string;

  constructor(private router: Router) { }
  
  items: MenuItem[];

  ngOnInit() {
    
    this.items = [
      {
        icon: 'pi pi-fw pi-home',"routerLink": "/homepage"
      },
      {
          label: 'Menu 1',
          items: [
              {label: 'Import ', "routerLink": "/importSection"},
              {label: 'Sub menu 1'},
          ]
      },
      {
          label: 'Menu 2',
          items: [
              {label: 'Export',  "routerLink": "/exportSection"},
              {label: 'Sub menu 2'},
          ]
      },
      {
        label: 'Reports',
        items: [
            {label: 'Repot 1'},
            {
              label: 'Report 2', 
              items: [
                  {label: 'Sub 1'},
                  {label: 'Sub 2'},
              ]
          }
            
        ]
    }
  ];
  }

  signOut(){
      this.router.navigate(['login']);
  }

}
