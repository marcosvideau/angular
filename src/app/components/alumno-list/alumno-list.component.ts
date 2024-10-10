import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AlumnoListComponent {
  @Input() alumnos: any[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'edad'];

  constructor() {}
}




