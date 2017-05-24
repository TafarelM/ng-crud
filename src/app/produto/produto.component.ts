import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, OnDestroy {

  produtos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getProduto();

     this.inscricao = this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });

  this.pagina = 1;
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/produto'], {
      queryParams: {'pagina': ++this.pagina}
    });
  }

  paginaAnterior() {
    this.router.navigate(['/produto'], {
      queryParams: {'pagina': --this.pagina}
    });

  }

}
