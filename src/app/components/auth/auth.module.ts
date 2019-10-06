import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TruncatePipe} from '../../pipes/truncate.pipe';
import {DetailsComponent} from './components/details/details.component';
import {CardComponent} from './components/card/card.component';
import {HighlightDirective} from '../../directives/highlight.directive';

@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    AboutComponent,
    TruncatePipe,
    DetailsComponent,
    CardComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}
