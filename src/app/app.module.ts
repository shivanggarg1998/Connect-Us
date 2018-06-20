import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ComponentComponent } from './component/component.component';
=======
import { HeaderComponent } from './header/header.component';
import { MainTextComponent } from './main-text/main-text.component';
import { MainButtonsComponent } from './main-buttons/main-buttons.component';
import { SignupSectionComponent } from './signup-section/signup-section.component';
>>>>>>> b84bc5eccf585415a006044d9dda5f6a902752bf

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ComponentComponent
=======
    HeaderComponent,
    MainTextComponent,
    MainButtonsComponent,
    SignupSectionComponent
>>>>>>> b84bc5eccf585415a006044d9dda5f6a902752bf
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
