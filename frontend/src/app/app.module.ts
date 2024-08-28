import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeCpfComponent } from './pages/home-cpf/home-cpf.component';
import { HomeCnpjComponent } from './pages/home-cnpj/home-cnpj.component';
import { MenuComponent } from './menu/menu.component';
import { EmployeeAvaliationComponent } from './pages/employee-avaliation/employee-avaliation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EvaluationHistoryComponent } from './pages/evaluation-history/evaluation-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeCpfComponent,
    HomeCnpjComponent,
    MenuComponent,
    EmployeeAvaliationComponent,
    EvaluationHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
