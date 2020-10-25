import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoutiqueRoutingModule } from './boutique-routing.module';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {RechercherDesProduitsComponent} from './rechercher-des-produits/rechercher-des-produits.component';
import {PanierComponent} from './panier/panier.component';
import {DetailComponent} from './detail/detail.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CatalogueComponent,
    RechercherDesProduitsComponent,
    PanierComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BoutiqueRoutingModule
  ]
})
export class BoutiqueModule { }
