import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addUser(item){
    return this.http.post("http://localhost:3000/saveExpense",item)
    // return this.http.post("/saveExpense",item)
  }

  getUserDetail()
  {
    return this.http.get("http://localhost:3000/getExpenseLast")
    // return this.http.get("/getExpenseLast")
  }

  getMonthlyDetail()
  {
    return this.http.get("http://localhost:3000/getMonthlyExpenseList")
    // return this.http.get("/getMonthlyExpenseList")
  }

}

