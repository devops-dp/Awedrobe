import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchPageComponent } from './launch-page/launch-page.component';
/**
 * This module serves as the routing controller
 */


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'web/home' },
  { path: 'web/home', component: LaunchPageComponent },
  { path: '', children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
