import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'launches',
    pathMatch: 'full',
  }, {
    path: '',
    component: DashboardComponent,
    children: [
      {
      path: '',
      loadChildren: './layouts/dashboard/dashboard.module#DashboardModule'
  }]},
  {
    path: '**',
    redirectTo: 'launches'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
