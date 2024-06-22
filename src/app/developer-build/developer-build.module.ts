import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DeveloperBuildRoutingModule } from './developer-build-routing.module';
import { TestingEnvironmentComponent } from './testing-environment/testing-environment.component';


@NgModule({
  declarations: [TestingEnvironmentComponent],
  imports: [
    CommonModule,
    DeveloperBuildRoutingModule
  ]
})
export class DeveloperBuildModule { }
