import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Colaborador } from 'src/app/shared/models/colaborador.model';
import { FormResourceService } from './../../shared/services/form-resource.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  colaborador: Colaborador;

  constructor(
    private fb: FormBuilder,
    public frService: FormResourceService
  ) { }

  ngOnInit(): void {
    this.listar();

    this.formulario = this.fb.group({
      nome_completo: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      data_nascimento: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required]]
    });
  }

  cpfMask: string = '000.000.000-00';
  dateMask: string = '00/00/0000';
  telMask: string = '(00) 0 0000-0000';

  public criar() {
    this.frService.criar(this.formulario.value).subscribe(data => {this.colaborador = data} );
    this.listar();
    this.formulario.reset();
  }

  public listar() {
    this.frService.listar().subscribe(data => {
      this.colaborador = data;
      console.log(this.colaborador);
    });
  }
}
