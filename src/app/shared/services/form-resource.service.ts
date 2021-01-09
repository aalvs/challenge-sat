import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormResourceService {

  apiUrl = 'http://localhost:8080/colaboradores';


  constructor() { }
}
