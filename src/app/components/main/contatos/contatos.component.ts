import { Component } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {

  contato: string = '(11)98936-8808'
  userLink: string = '@CAPELANIASALTOAMIGOSDOBEM'
  email: string = 'capelaniasaltoamigosdobem@gmail.com'
  pix: string = 'pix: 11974010947'

}
