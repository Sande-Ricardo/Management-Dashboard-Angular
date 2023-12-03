import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { BackgroundComponent } from './components/background/background.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { ClockComponent } from './components/clock/clock.component';
import { NotesComponent } from './components/notes/notes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent,
    BackgroundComponent,
    TopPanelComponent,
    PrincipalPageComponent,
    ClockComponent,
    NotesComponent
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
