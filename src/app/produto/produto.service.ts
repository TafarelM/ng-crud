import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {

  getProduto() {
    return [
      { id: 1, nome: 'Pão' },
      { id: 2, nome: 'Feijão' },
      { id: 3, nome: 'Arroz' }
    ];
  }

  constructor() { }

}