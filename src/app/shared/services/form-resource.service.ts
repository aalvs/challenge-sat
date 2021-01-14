import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador } from '../models/colaborador.model';
@Injectable({
  providedIn: 'root'
})
export class FormResourceService {

  apiUrl = 'https://challenge-sat-apirest.herokuapp.com/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public listar(): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.apiUrl}/pessoas`);
  }

  public criar(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(`${this.apiUrl}/pessoa`, colaborador, this.httpOptions);
  }

}
