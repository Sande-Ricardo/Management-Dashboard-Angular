import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TestingEnvironmentComponent } from './testing-environment/testing-environment.component';

const routes: Routes = [
  {
    path:'', component:TestingEnvironmentComponent, children:[
      {path:'login', component: LoginComponent},
      // {path:'assistant', component: AssistantComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperBuildRoutingModule { }
