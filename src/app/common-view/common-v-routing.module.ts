import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from '../principal-page/principal-page.component';

import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:'principal', component:PrincipalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonVRoutingModule { }
