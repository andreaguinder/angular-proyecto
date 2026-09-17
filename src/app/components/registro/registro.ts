import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

const { required, email, minLength } = Validators;

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
    nombre: ['', [required, minLength(3)]],
    email: ['', [required, email]],
    mensaje: ['', [required, minLength(10)]]
  });
}

guardarRegistro() {

const data = this.formulario.getRawValue();
const { nombre, email, mensaje } = data;

console.log('Registro guardado:', { nombre, email, mensaje });

  
}

}
