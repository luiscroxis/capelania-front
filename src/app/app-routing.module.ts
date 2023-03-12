import { ContatosComponent } from './components/main/contatos/contatos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './components/main/historia/historia.component';
import { MissoesComponent } from './components/main/missoes/missoes.component';
import { EventosComponent } from './components/main/eventos/eventos.component';

const routes: Routes = [
  {
    path: '',
    component: HistoriaComponent
  },
  {
    path: 'historia',
    component: HistoriaComponent
  },
  {
    path: 'missoes',
    component: MissoesComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'contatos',
    component: ContatosComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
