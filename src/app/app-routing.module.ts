import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path:'', component:PrincipalPageComponent,
    }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
