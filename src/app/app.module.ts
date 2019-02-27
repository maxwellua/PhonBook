import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashBoardModule } from './dash-board/dash-board.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactsHttpService } from './common/services/contacts-http.service';
import { ContactsStorage } from './common/services/exchange-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashBoardModule,
    HttpClientModule
  ],
  providers: [ContactsHttpService, ContactsStorage],
  bootstrap: [AppComponent]
})
export class AppModule {
}
