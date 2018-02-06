import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


//md-bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//routing
import { AppRoutingModule } from './app-routing.module';
import { BorrarComponent } from './borrar/borrar.component';


@NgModule({
  declarations: [
    AppComponent,
    BorrarComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
