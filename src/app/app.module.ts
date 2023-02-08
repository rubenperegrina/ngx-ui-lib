import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiImageGaleryModule } from 'projects/ngx-ui-library/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiImageGaleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
