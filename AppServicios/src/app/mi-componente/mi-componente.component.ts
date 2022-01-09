import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',

})
export class MiComponenteComponent implements OnInit {

  constructor(
    private mensajeService:MensajeService //inyeccion del servicio
    ) { }

  ngOnInit(): void {
    this.mensajeService.PasarMensaje("Hola Desde el componente 1 ") //hacer uso del servicio concretamente al metodo PasarMensaje
  }

}
