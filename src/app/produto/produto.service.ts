import { Injectable } from '@angular/core';

import { Produto } from './produto';

@Injectable()
export class ProdutoService {

  private produtos: Produto[] = [
    { id: 1, descricao: 'Pão', valor: 0.50 },
    { id: 2, descricao: 'Feijão', valor: 5.00 },
    { id: 3, descricao: 'Arroz', valor: 4.00 },
    { id: 4, descricao: 'Pão de Queijo', valor: 8.80},
    { id: 5, descricao: 'Sucode Uva', valor: 3.52 }
  ];

  getProdutos() {
    return this.produtos;
  }

  getProduto(id: number) {
    for (let i = 0; i < this.produtos.length; i++) {
      let produto = this.produtos[i];
      if (produto.id == id) {
        return produto;
      }
    }
    return null;
  }

  constructor() { }

}
