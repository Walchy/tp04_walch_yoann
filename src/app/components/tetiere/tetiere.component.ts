import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Produit} from '../../../../shared/models/Produit';
import {Store} from '@ngxs/store';
import {ProduitState} from '../../../../shared/states/produit-state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.scss']
})
export class TetiereComponent implements OnInit {
  listeProduits$: Observable<Produit>;
  nbProduits$: Observable<number>

  constructor(public router:Router, private store: Store) { }

  ngOnInit(): void {
    this.listeProduits$ = this.store.select(state => state.listeProduits$);
    // Solution 1
    this.nbProduits$ = this.store.select(ProduitState.getNbProduitsDansPanier);
    // Solution 2 si on a pas fait de fonction getNbProduitsDansPaniergetNbProduitsDansPanier
    //this.nbProduits$ = this.store.select(state => state.panier.length);
  }

  onClickPanier(): void {
    this.router.navigate(['/boutique/panier'], {queryParams: this.listeProduits$})
  }

  onClickAccueil(): void {
    this.router.navigate(['/accueil'], {queryParams: this.listeProduits$})
  }

  onClickCatalogue(): void {
    this.router.navigate(['/boutique/catalogue'], {queryParams: this.listeProduits$})
  }
}
