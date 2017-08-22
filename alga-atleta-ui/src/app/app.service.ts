import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  atletasUrl: string = "http://localhost:8080/atletas";

  constructor(private http: Http) { }

  listar(): Promise<any> {
    return this.http.get(this.atletasUrl)
      .toPromise()
      .then(response => response.json());
  }

  buscar(id): Promise<any> {
    return this.http.get(`${this.atletasUrl}/${id}`)
      .toPromise()
      .then(response => response.json());
  }

  criar(atleta): Promise<any> {
    return this.http.post(this.atletasUrl, atleta)
      .toPromise()
      .then(response => response.json());
  }

  atualizar(atleta): Promise<any> {
    return this.http.put(`${this.atletasUrl}/${atleta['id']}`, atleta)
      .toPromise()
      .then(response => response.json());
  }

  remover(id): Promise<any> {
    return this.http.delete(`${this.atletasUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }
}
