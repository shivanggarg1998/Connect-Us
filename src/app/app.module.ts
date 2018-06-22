import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './home/header/header.component';
import { MainTextComponent } from './home/main-text/main-text.component';
import { MainButtonsComponent } from './home/main-buttons/main-buttons.component';
import { SignupSectionComponent } from './home/signup-section/signup-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ExploreComponent } from './explore/explore.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
  {path:'explore' , component: ExploreComponent},
  {path:'about-us' , component: AboutUsComponent},
  {path:'login' , component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    MainTextComponent,
    MainButtonsComponent,
    SignupSectionComponent,
    AboutUsComponent,
    LoginComponent,
    ExploreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
