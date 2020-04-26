import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbajoComponent } from './shared/abajo/abajo.component';
import { ArribaComponent } from './shared/arriba/arriba.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';


@NgModule({
  declarations: [
    AppComponent,
    AbajoComponent,
    ArribaComponent,
    PortafolioComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
