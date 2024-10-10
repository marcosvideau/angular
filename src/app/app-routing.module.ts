import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoAbmComponent } from './components/alumno-abm/alumno-abm.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnoListComponent },
  { path: 'alumno-abm', component: AlumnoAbmComponent },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
