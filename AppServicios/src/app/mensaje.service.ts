import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor() { }

  public PasarMensaje(mensaje:string){
    console.log(mensaje);


  }
}
