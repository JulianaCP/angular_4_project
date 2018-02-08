import { Injectable, OnInit } from '@angular/core';

//http
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

//modelo
import { Persona } from './models/persona.model';
@Injectable()
export class PersonaService {
  private ip = "http://172.24.44.251:8090/";


  private getUsuariosUrl = "Usuarios/obtenerListaUsuarios/";

  constructor(private _http: HttpClient) { 

  }
  getUsuarios(tipoPermiso: string): Observable<Persona[]> {
    this.getUsuariosUrl = this.ip + this.getUsuariosUrl + tipoPermiso; 
    console.log("direccion: " + this.getUsuariosUrl);
    return this._http.get<Persona[]>(this.getUsuariosUrl);
  }
/*
  getUsuarios(tipoPermiso: string): Observable<Persona[]> {
    this.getUsuariosUrl = this.ip + this.getUsuariosUrl + tipoPermiso; 
    console.log("direccion: " + this.getUsuariosUrl);
    return this._http.get<Persona[]>(this.getUsuariosUrl)
      .pipe(
        catchError(this.handleError<any>('getUser', []))
    );
  }
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error("ocurrio un error: " + error);
  
      return of(result as T);
    };
  }
}
