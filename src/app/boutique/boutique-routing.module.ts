import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {PanierComponent} from './panier/panier.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: '', component: CatalogueComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'detail', component: DetailComponent},
  // {path: 'detail/:nom', component: DetailComponent},
  //{path: 'catalogue', import('./modules/catalogue/catalogue.module'). then(m => m.CatalogueModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiqueRoutingModule { }
