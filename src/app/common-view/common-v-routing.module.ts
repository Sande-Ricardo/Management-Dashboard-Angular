import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from '../principal-page/principal-page.component';
import { CommonViewComponent } from './common-view.component';



const routes: Routes = [
  {path:'principal', component:PrincipalPageComponent},
  {path:'', component:CommonViewComponent, children:[
    { path: 'base',  component: PrincipalPageComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonVRoutingModule { }
