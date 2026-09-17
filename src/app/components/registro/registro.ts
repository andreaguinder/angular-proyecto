import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})


export class Registro {
formulario

constructor(private formBuilder: FormBuilder) {
  this.formulario = this.formBuilder.group({
    nombre: [''],
    email: [''],
    mensaje: ['']
  });
}

guardarRegistro() {

const data = this.formulario.getRawValue();
console.log('Datos del formulario:', data);

  
}

}
