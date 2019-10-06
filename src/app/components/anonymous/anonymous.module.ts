import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnonymousRoutingModule} from './anonymous-routing.module';
import {AnonymousComponent} from './anonymous.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AnonymousComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AnonymousRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AnonymousModule {
}
