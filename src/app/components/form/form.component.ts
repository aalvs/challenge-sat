import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormResourceService } from './../../shared/services/form-resource.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  listaColabs: any[];

  constructor(
    private fb: FormBuilder,
    public service: FormResourceService
    ) { }

  ngOnInit(): void {

    this.listaColabs = [
      {
        id: '01',
        nome: 'André',
        cpf: '000.000.000-00',
        rg: '00.000.000-0',
        dataNascimento: '04/07/1995',
        email: 'andre@email.com',
        tel: '(00) 0 0000-0000'
      },
      {
        id: '02',
        nome: 'Enzo',
        cpf: '000.000.000-00',
        rg: '00.000.000-0',
        dataNascimento: '04/07/1995',
        email: 'enzo@email.com',
        tel: '(00) 0 0000-0000'
      },
      {
        id: '03',
        nome: 'Helena',
        cpf: '000.000.000-00',
        rg: '00.000.000-0',
        dataNascimento: '04/07/1995',
        email: 'helena@email.com',
        tel: '(00) 0 0000-0000'
      }
    ];

    this.formulario = this.fb.group({
      nomeCompleto: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      tel: [null, [Validators.required]]
    });
  }

  cpfMask: string = '000.000.000-00';
  dateMask: string = '00/00/0000';
  telMask: string = '(00) 0 0000-0000';

  onSubmit(){
    console.log(this.formulario);
    console.warn(this.formulario.value);
    this.formulario.reset();
  }
}
