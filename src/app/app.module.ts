import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FormsModule } from '@angular/forms';
import { SupportsystemComponent } from './supportsystem/supportsystem.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    SupportsystemComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
