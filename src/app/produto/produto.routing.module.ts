import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component, ModuleWithProviders } from '@angular/core';

import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoComponent } from './produto.component';

const PRODUTO_ROUTES: Routes = [
    {
        path: 'produto',
        component: ProdutoComponent
    },
    {
        path: 'produto/novo',
        component: ProdutoFormComponent
    },
    {
        path: 'produto/:id',
        component: ProdutoDetalheComponent
    },
    {
        path: 'produto/editar/:id',
        component: ProdutoFormComponent
    },
    {
        path: 'produto/excluir/:id',
        component: ProdutoFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(PRODUTO_ROUTES)],
    exports: [RouterModule]
})

export class ProdutoRoutingModule { }
