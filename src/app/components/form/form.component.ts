import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [null, [Validators.required]],
      cpf: [null,[Validators.required]],
      rg: [null,[Validators.required]],
      dataNascimento: [null,[Validators.required]],
      sexo: ['Masculino',[Validators.required]],
      nomeMae: [null,[Validators.required]],
      nomePai: [null,[Validators.required]],
      endereco: [null,[Validators.required]],
      email: [null,[Validators.required, Validators.email]],
      tel: [null,[Validators.required]]
    })
  }

  cpfMask: string = '000.000.000-00';
  rgMask: string = '00.000.000-0';
  telMask: string = '(00) 0 0000-0000';

  onSubmit(){
    console.warn(this.formulario.value);
    this.formulario.reset();
  }
}
