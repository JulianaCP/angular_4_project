import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


//md-bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//routing
import { AppRoutingModule } from './app-routing.module';
import { BorrarComponent } from './borrar/borrar.component';
import { PersonaService } from './persona.service';


import { Persona } from './models/persona.model';

//http
import { HttpClientModule } from '@angular/common/http';
//components
import { ErrorHandleComponent } from './error-handle/error-handle.component';

@NgModule({
  declarations: [
    AppComponent,
    BorrarComponent,
    ErrorHandleComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
