import { FormResourceService } from './../../shared/services/form-resource.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  listaColabs: Object[];

  constructor(
    private fb: FormBuilder,
    private service: FormResourceService
    ) { }

  ngOnInit(): void {

    this.listaColabs = [
      {
        nome: 'André',
        cpf: '000.000.000-00',
        rg: '00.000.000-0',
        dataNascimento: '04/07/1995',
        email: 'andre@email.com',
        tel: '(00) 0 0000-0000'
      }
    ];


    this.service.listar()
      .subscribe(resposta => this.listaColabs = resposta);


    this.formulario = this.fb.group({
      nome: [null, [Validators.required]],
      cpf: [null,[Validators.required]],
      rg: [null,[Validators.required]],
      dataNascimento: [null,[Validators.required]],
      sexo: ['Masculino',[Validators.required]],
      email: [null,[Validators.required, Validators.email]],
      tel: [null,[Validators.required]]
    });
  }

  cpfMask: string = '000.000.000-00';
  rgMask: string = '00.000.000-0';
  dateMask: string = '00/00/0000';
  telMask: string = '(00) 0 0000-0000';

  onSubmit(){
    console.log(this.formulario);
    console.warn(this.formulario.value);
    this.formulario.reset();
  }
}
