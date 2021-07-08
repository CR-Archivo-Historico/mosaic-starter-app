import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './shared/pages/status/status.component';

const routes: Routes = [
  {
    path: 'status',
    component: StatusComponent
  },
  {
    path: '**',
    redirectTo: 'status'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
