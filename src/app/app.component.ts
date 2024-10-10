import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos: any[] = [];

  agregarAlumno(nuevoAlumno: any) {
    this.alumnos.push(nuevoAlumno);
    console.log('Alumno agregado:', nuevoAlumno);
    console.log('Lista de alumnos:', this.alumnos);
  }
  }






