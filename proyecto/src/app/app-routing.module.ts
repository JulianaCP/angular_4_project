import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { BorrarComponent } from './borrar/borrar.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';


const routes: Routes = [
  { path: '', redirectTo: 'borrar', pathMatch: 'full' },
  { path: 'borrar', component: BorrarComponent},
  { path: 'error', component: ErrorHandleComponent},
  { path: '**', component: BorrarComponent } //mostrar si no lo encuentra

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}