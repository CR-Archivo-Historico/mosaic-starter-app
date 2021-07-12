import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusComponent } from './shared/pages/status/status.component';

const routes: Routes = [
  {
    path: 'info',
    loadChildren: () => import('./modules/info/info.module').then( m => m.InfoModule )
  },
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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
