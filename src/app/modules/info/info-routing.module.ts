import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent
    /*children: [
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: '**',
        redirectTo: 'info'
      }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
