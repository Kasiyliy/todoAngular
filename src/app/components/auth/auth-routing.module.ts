import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {AuthComponent} from './auth.component';
import {DetailsComponent} from './components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        component: AboutComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
