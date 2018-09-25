import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import {FormsModule} from '@angular/forms';
import { ListMonthlyExpensesComponent } from './list-monthly-expenses/list-monthly-expenses.component'

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    ListExpensesComponent,
    ListMonthlyExpensesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
