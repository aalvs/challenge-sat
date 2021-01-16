import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Colaborador } from '../models/colaborador.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FormResourceService {

  apiUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  public listar(): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.apiUrl}pessoas`)
  }

  public criar(colaborador: any): Observable<Colaborador> {
    return this.http.post<any>(`${this.apiUrl}pessoa`, colaborador, this.httpOptions);
  }

  private tratarErrors(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(
        `O código retornado pelo nack-end é ${error.status},`+
        `O corpo da mensagem é: ${error.error}`
      );
    }
    return throwError('Algo ruim aconteceu. Tente novamente mais tarde.');
  }
}
