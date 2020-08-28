import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from '../../components/launches/launches.component';



const routes: Routes = [
  { path: 'launches', component: LaunchesComponent },
  { path: 'launches/:launch_year/:launch_success/:land_success', component: LaunchesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
