import { Component } from '@angular/core';




import { PersonaService } from './persona.service';
import { Persona } from './models/persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  usuarios: Persona[];
  constructor(private personaService: PersonaService, private _router: Router) {}
  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.personaService.getUsuarios('')
        .subscribe(
          success => { 
            console.log("success")
            this.usuarios = success; 
          },
          err => {
            console.log("error")
            this._router.navigate(['/error']);
          }
        );
  }
}
