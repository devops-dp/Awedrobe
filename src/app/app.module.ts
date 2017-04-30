import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';

import { CONSTANTS_PROVIDERS } from './app-constants';

import 'hammerjs';
import { NavbarComponent } from './navbar/navbar.component';

import { MaterialModuleSpec } from './material-module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchPageComponent,
    NavbarComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleSpec
  ],
  providers: [
    CONSTANTS_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
