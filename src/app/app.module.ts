import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsComponent } from './components/components.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente1Component } from './components/componente1/componente1.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    ComponentsComponent,
    Componente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
