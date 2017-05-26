import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component, ModuleWithProviders } from '@angular/core';

import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoComponent } from './produto.component';

const PRODUTO_ROUTES = [
    {
        path: '',
        component: ProdutoComponent,
    },
    {
        path: 'novo',
        component: ProdutoFormComponent
    },
    {
        path: 'detalhe/:id',
        component: ProdutoFormComponent
    },
    {
        path: 'editar/:id',
        component: ProdutoFormComponent
    },
    {
        path: 'excluir/:id',
        component: ProdutoFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(PRODUTO_ROUTES)],
    exports: [RouterModule]
})

export class ProdutoRoutingModule { }
