import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ListItemsComponent } from '../components/list-items/list-items.component';
import { NotesComponent } from '../components/notes/notes.component';
import { PrincipalPageComponent } from '../principal-page/principal-page.component';
import { CommonVRoutingModule } from './common-v-routing.module';
import { CommonViewComponent } from './common-view.component';

import { MarkdownModule } from 'ngx-markdown';
import { AssistantComponent } from '../components/assistant/assistant.component';
import { BackgroundComponent } from '../components/background/background.component';
import { ClockComponent } from '../components/clock/clock.component';
import { FlashcardsComponent } from '../components/flashcards/flashcards.component';
import { LateralMenuComponent } from '../components/lateral-menu/lateral-menu.component';
import { TopPanelComponent } from '../components/top-panel/top-panel.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CommonViewComponent,
    PrincipalPageComponent,
    ListItemsComponent,
    NotesComponent,
    LateralMenuComponent,
    BackgroundComponent,
    TopPanelComponent,
    ClockComponent,
    AssistantComponent,
    FlashcardsComponent
  ],
  imports: [
    CommonModule,
    CommonVRoutingModule,
    FormsModule,
    MarkdownModule.forRoot()
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  exports:[
    CommonViewComponent
  ]
})
export class CommonVModule { }
