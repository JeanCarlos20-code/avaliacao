import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeCpfComponent } from './pages/home-cpf/home-cpf.component';
import { HomeCnpjComponent } from './pages/home-cnpj/home-cnpj.component';
import { EmployeeAvaliationComponent } from './pages/employee-avaliation/employee-avaliation.component';
import { EvaluationHistoryComponent } from './pages/evaluation-history/evaluation-history.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home-cnpj', component: HomeCnpjComponent },
  { path: 'home-cnpj/employee-avaliation', component: EmployeeAvaliationComponent },
  { path: 'home-cnpj/historic', component: EvaluationHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
