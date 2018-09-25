import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-monthly-expenses',
  templateUrl: './list-monthly-expenses.component.html',
  styleUrls: ['./list-monthly-expenses.component.css']
})
export class ListMonthlyExpensesComponent implements OnInit {
  summary:any

  constructor(private dataService : DataService , private route: Router) { }

  ngOnInit() {
    var count=0;
    this.dataService.getMonthlyDetail().subscribe(
      (data:any)=>{
        console.log(data)
        this.summary=data.data
      },
      err=>{
        console.log(err)
      }
    )
  }


}
