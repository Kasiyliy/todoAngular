import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/auth/components/home/home.component';
import {AboutComponent} from './components/auth/components/about/about.component';
import {LoginComponent} from './components/anonymous/components/login/login.component';
import {RegisterComponent} from './components/anonymous/components/register/register.component';
import {AppComponent} from './app.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthRoutingModule} from './components/auth/auth-routing.module';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/anonymous/anonymous.module#AnonymousModule'
  },
  {
    path: 'auth',
    loadChildren: './components/auth/auth.module#AuthModule',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
