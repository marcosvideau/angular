import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-abm',
  templateUrl: './alumno-abm.component.html',
  styleUrls: ['./alumno-abm.component.css']
})
export class AlumnoAbmComponent {
  alumnoForm: FormGroup;

  @Output() alumnoAgregado = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1)]],
      curso: ['', Validators.required] 
    });
  }

  agregarAlumno() {
    console.log('Formulario enviado:', this.alumnoForm.value); 

    if (this.alumnoForm.valid) {
      console.log('Formulario válido, emitiendo alumno:', this.alumnoForm.value);
      this.alumnoAgregado.emit(this.alumnoForm.value);
      this.alumnoForm.reset();
    } else {
      console.log('Formulario inválido');
    }
  }
}





