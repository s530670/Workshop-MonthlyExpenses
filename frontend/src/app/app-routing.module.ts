import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import { ListMonthlyExpensesComponent } from './list-monthly-expenses/list-monthly-expenses.component';

const routes: Routes = [
  {    path: 'addExpense', component:AddExpenseComponent  },
  {    path: 'listExpense', component: ListExpensesComponent},
  {    path: 'listMonthlyExpense', component: ListMonthlyExpensesComponent},
  {    path: '', redirectTo: "/addExpense",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
