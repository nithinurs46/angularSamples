import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    pieData: any;
    barData:any;
    userName:string = "A";
  
  constructor() {
  }

    ngOnInit() {
        this.displayPieChart();
        this.displayBarChart();
    }

    displayPieChart(){
        this.pieData = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
    }

    displayBarChart(){
        this.barData = {
            labels: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6'],
            datasets: [
                {
                    label: 'Format 1',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55]
                },
                {
                    label: 'Format 2',
                    backgroundColor: '#ffc107',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27]
                }
            ]
        }
    }
}
