import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonViewComponent } from './common-view/common-view/common-view.component';
// import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path:'',
      pathMatch:"full",
      redirectTo:"home"
    },

    // {
    //   path:'home', component:CommonViewComponent
    // },
    // {
    //   path:'cooming', component:PrincipalPageComponent,
    //   // path:'tests', module:TestmModule
    // },
    {
      // Lazy loading
      path:'common', 
      loadChildren: () => 
        import('./common-view/common-v.module').then((m)=> m.CommonVModule)
    },
    {
      // Lazy loading
      path:'testing', 
      loadChildren: () => 
        import('./developer-build/developer-build.module').then((m)=> m.DeveloperBuildModule)
    }

  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
