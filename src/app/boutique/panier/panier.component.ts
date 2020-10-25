import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../../../../shared/models/Produit';
import {AjouterProduit, SupprimerProduit} from '../../../../shared/actions/produit-actions';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ProduitState} from '../../../../shared/states/produit-state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  listeProduitsDansPanier: Observable<Produit[]>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.listeProduitsDansPanier = this.store.select(ProduitState.getContenuPanier);
  }

  // Suppression du produit
  SupprimerProduitDuPanier(produit: Produit): void {
    // on passe l'action SupprimerProduit
    this.store.dispatch(new SupprimerProduit(produit));

  }
  // clic sur la corbeille
  onSupprimerDuPanier(produit: Produit): void {
    this.SupprimerProduitDuPanier(produit);
  }
}
