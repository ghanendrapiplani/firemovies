import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailsComponent} from './hero-details/hero-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
