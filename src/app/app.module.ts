import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainTextComponent } from './main-text/main-text.component';
import { MainButtonsComponent } from './main-buttons/main-buttons.component';
import { SignupSectionComponent } from './signup-section/signup-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainTextComponent,
    MainButtonsComponent,
    SignupSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
