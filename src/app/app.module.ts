import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HistoriaComponent,
    MissoesComponent,
    EventosComponent,
    ContatosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
