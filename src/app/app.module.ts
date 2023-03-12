import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from './modules/material/material.module';
import { HistoriaComponent } from './components/main/historia/historia.component';
import { MissoesComponent } from './components/main/missoes/missoes.component';
import { EventosComponent } from './components/main/eventos/eventos.component';
import { ContatosComponent } from './components/main/contatos/contatos.component';
import { MatCarouselModule } from '@magloft/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HistoriaComponent,
    MissoesComponent,
    EventosComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
     MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
