import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyCleanerComponent } from './components/emergency-cleaner/emergency-cleaner.component';
// import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [
  {
    path:'*',
    pathMatch:"full",
    redirectTo:"home"
  },
  // Lazy loading (loadChildren)
  {
    path:'',
    loadChildren: () =>
      import('./common-view/common-v.module').then((m)=> m.CommonVModule)
  },
  {
    path:'test',
    loadChildren: () =>
      import('./developer-build/developer-build.module').then((m)=> m.DeveloperBuildModule)
  },
  {
    path:'login',
    loadChildren: () =>
      import('./login/login.module').then((m)=> m.LoginModule)
  },
  {
    path:'clean_local_storage', component: EmergencyCleanerComponent
  }
  // {path:'home', component:AppComponent},
  // {
  //   path:'comming', component:PrincipalPageComponent,
  //   // path:'tests', module:TestmModule
  // },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
