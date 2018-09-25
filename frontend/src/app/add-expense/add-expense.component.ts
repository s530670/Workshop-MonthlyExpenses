import { Component, OnInit } from '@angular/core';
import { Expense } from '../common/list';
import { DataService } from '../common/data.service';
import { Router } from '@angular/router';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  step:string
  expenseObject:Expense
  features = []

  constructor( private dataService : DataService, private route: Router)
  {

  }

  ngOnInit() {
    // this.step="1"
    this.expenseObject= new Expense;
    }

  submitForm(user){
    console.log(this.expenseObject);
    // this.expenseObject.Description = this.features.toString();
    this.dataService.addUser(this.expenseObject)
      .subscribe(data => {
        console.log(data)
        this.route.navigate(["/listExpense"]);
      },
    err=>{
      console.log("error",err)
    })
  }
}