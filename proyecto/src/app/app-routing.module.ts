import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { BorrarComponent } from './borrar/borrar.component';

const routes: Routes = [
  { path: '', redirectTo: 'borrar', pathMatch: 'full' },
  { path: 'borrar', component: BorrarComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}