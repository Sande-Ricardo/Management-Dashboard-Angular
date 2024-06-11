import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { BackgroundComponent } from './components/background/background.component';
// import { ClockComponent } from './components/clock/clock.component';
// import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
// import { TopPanelComponent } from './components/top-panel/top-panel.component';
// import { CommonViewComponent } from './common-view/common-view/common-view.component';
// import { PrincipalPageComponent } from './principal-page/principal-page.component';
// import { ListItemsComponent } from './components/list-items/list-items.component';
// import { NotesComponent } from './components/notes/notes.component';
// import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    AppComponent
    // LateralMenuComponent,
    // BackgroundComponent,
    // TopPanelComponent,
    // ClockComponent,
    // CommonViewComponent

    // PrincipalPageComponent,
    // NotesComponent,
    // ItemComponent,
    // ListItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
