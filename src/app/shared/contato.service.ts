import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contato } from './contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
contato: Contato;

  constructor(private http:HttpClient) { }

  salvarContato(contato: Contato){
    var body = {
      nome: contato.Nome,
      email: contato.Email,
      telefone: contato.Telefone,
      descricao: contato.Descricao
    };
    return this.http.post(environment.apiURL + 'contato/register/', body);
  }

}
