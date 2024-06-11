import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonVRoutingModule } from './common-v-routing.module';
import { PrincipalPageComponent } from '../principal-page/principal-page.component';
import { ListItemsComponent } from '../components/list-items/list-items.component';
import { NotesComponent } from '../components/notes/notes.component';
import { ItemComponent } from '../components/item/item.component';
import { FormsModule } from '@angular/forms';
import { CommonViewComponent } from './common-view/common-view.component';

import { BackgroundComponent } from '../components/background/background.component';
import { ClockComponent } from '../components/clock/clock.component';
import { LateralMenuComponent } from '../components/lateral-menu/lateral-menu.component';
import { TopPanelComponent } from '../components/top-panel/top-panel.component';

@NgModule({
  declarations: [
    CommonViewComponent,
    PrincipalPageComponent,
    ListItemsComponent,
    NotesComponent,
    ItemComponent,
    LateralMenuComponent,
    BackgroundComponent,
    TopPanelComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    CommonVRoutingModule,
    FormsModule
  ]
})
export class CommonVModule { }
