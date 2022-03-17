import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { ThumbPersonajeComponent } from './components/thumb-personaje/thumb-personaje.component';
import { VistaPersonajeComponent } from './components/vista-personaje/vista-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajesComponent,
    ThumbPersonajeComponent,
    VistaPersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
