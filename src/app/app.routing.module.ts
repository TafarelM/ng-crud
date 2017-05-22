import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PgNaoEncontradaComponent } from './pg-nao-encontrada/pg-nao-encontrada.component';
import { ProdutoComponent } from './produto/produto.component';

const APP_ROUTES: Routes = [
    {
        path: 'produto',
        component: ProdutoComponent
    },
    {
        path: 'produto/:id',
        component: ProdutoComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '', redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**', component: PgNaoEncontradaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
