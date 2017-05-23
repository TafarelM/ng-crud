import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProdutoNaoEncontradoComponent } from './produto-nao-encontrado/produto-nao-encontrado.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoRoutingModule } from './produto.routing.module';
import { ProdutoService } from './produto.service';
import { ProdutoComponent } from './produto.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProdutoRoutingModule
    ],
    exports: [],
    declarations: [
        ProdutoComponent,
        ProdutoDetalheComponent,
        ProdutoFormComponent,
        ProdutoNaoEncontradoComponent
    ],
    providers: [
        ProdutoService
    ],
})
export class ProdutoModule { }
