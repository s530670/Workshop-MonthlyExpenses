import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
summary:any

  constructor(private dataService : DataService , private route: Router) { }

  ngOnInit() {
    this.dataService.getUserDetail().subscribe(
      (data:any)=>{
        console.log(data)
        this.summary=data.data
      },
      err=>{
        console.log(err)
      }
    )
  }
  listMonthlyExpenses()
  {
    this.route.navigate(["/listMonthlyExpense"]);    
  }
  
  submitForm(){
    this.route.navigate(["/addExpense"]);
    // console.log(this.expenseObject);
    // // this.expenseObject.Description = this.features.toString();
    // this.dataService.addUser(this.expenseObject)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.route.navigate(["/listExpense"]);
    //   },
    // err=>{
    //   console.log("error",err)
    // })
  }

}
