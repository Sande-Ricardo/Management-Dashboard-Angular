import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmergencyCleanerComponent } from './components/emergency-cleaner/emergency-cleaner.component';
import { CoreModule } from './core/core.module';
import { JwtInterceptor } from './interceptors/JwtInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmergencyCleanerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    CookieService,
    // JwtService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
