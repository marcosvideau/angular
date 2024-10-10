import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(alumno: any): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }

}
