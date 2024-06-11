import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingEnvironmentComponent } from './testing-environment/testing-environment.component';

const routes: Routes = [
  {
    path:'developer_build', component:TestingEnvironmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperBuildRoutingModule { }
