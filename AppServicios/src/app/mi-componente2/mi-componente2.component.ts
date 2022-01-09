import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-mi-componente2',
  templateUrl: './mi-componente2.component.html',
 
})
export class MiComponente2Component implements OnInit {

  constructor(private mensajeService : MensajeService) { }

  ngOnInit(): void {
    this.mensajeService.PasarMensaje("Hola Desde el Componente 2");
  }

}
