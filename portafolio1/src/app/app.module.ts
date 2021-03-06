import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbajoComponent } from './shared/abajo/abajo.component';
import { ArribaComponent } from './shared/arriba/arriba.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    AbajoComponent,
    ArribaComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
