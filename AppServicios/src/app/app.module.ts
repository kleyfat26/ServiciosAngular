import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MensajeService } from './mensaje.service';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { MiComponente2Component } from './mi-componente2/mi-componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    MiComponente2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
