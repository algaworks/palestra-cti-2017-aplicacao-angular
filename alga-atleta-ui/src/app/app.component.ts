import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  atletas = [];

  atleta = {};
  
  constructor(private appService: AppService){}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.appService.listar()
      .then(dados => this.atletas = dados);
  }  

  salvar(frm: FormControl) {
    let promise: Promise<any> = null;
    if (this.atleta['id'] == null) {
      promise = this.appService.criar(this.atleta);
    } else {
      promise = this.appService.atualizar(this.atleta);
    }

    promise.then(() => {
      this.atleta = {};
      frm.reset();
      this.listar();
    })
  }

  editar(atleta) {
    this.appService.buscar(atleta['id'])
      .then(dados => this.atleta = dados);
  }

  remover(atleta) {
    this.appService.remover(atleta['id'])
      .then(() => this.listar());
  }

  cancelar(frm: FormControl) {
    this.atleta = {};
    frm.reset();
  }
}
