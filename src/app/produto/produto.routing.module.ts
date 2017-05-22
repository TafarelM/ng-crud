import { RouterModule } from '@angular/router';
import { NgModule, Component, ModuleWithProviders } from '@angular/core';

import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoComponent } from './produto.component';

const PRODUTO_ROUTES = [
    {
        path: '', component: ProdutoComponent,
        children: [
            {
                path: 'novo',
                component: ProdutoFormComponent
            },
            {
                path: ':id',
                component: ProdutoDetalheComponent
            },
            {
                path: ':id/editar',
                component: ProdutoFormComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(PRODUTO_ROUTES)],
    exports: [RouterModule]
})

export class ProdutoRoutingModule { }
