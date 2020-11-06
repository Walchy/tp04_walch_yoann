import { NgxsModule, Action, Selector, State, StateContext } from '@ngxs/store';
import { Panier} from './panier-state-model';
import {AjouterProduit, SupprimerProduit} from '../actions/produit-actions';
import {Observable} from 'rxjs';
import {Produit} from '../models/Produit';

@State<Panier>({
  name: 'panier',
  defaults: {
    panier: []
  }
})
export class ProduitState {
  @Selector()
  static getNbProduitsDansPanier(state: Panier): number {
    return state.panier.length;
  }

  @Selector()
  static getContenuPanier(state: Panier): Produit[] {
    return state.panier;
  }

  @Action(AjouterProduit)
  add(
    { getState, patchState }: StateContext<Panier>,
    { produitEnParamDeAjouterProduit }: AjouterProduit
  ) {
    const state = getState();
    patchState({
      // créer un nouveau tableau
      // l'opérateur ... permet de constituer une liste d'élement du tableau
      panier: [...state.panier, produitEnParamDeAjouterProduit]
    });
  }

  @Action(SupprimerProduit)
  del(
    { getState, patchState }: StateContext<Panier>,
    { produitEnParamDeSupprimerProduit }: SupprimerProduit
  ){
    const state = getState();
    let panierAJour: Panier;
    panierAJour = new Panier();
    panierAJour.panier = state.panier;
    // enlève un unique produit mais ne notifie pas le compteur de produits dans le panier
    for(let produit of panierAJour.panier) {
      if(produitEnParamDeSupprimerProduit.nom === produit.nom) {
        // state.panier =
        panierAJour.panier.splice(state.panier.indexOf(produit), 1)
        break;
      }
    }
    // supprime toutes les instances du produits
    patchState({
      // supprimer le produitEnParamDeSupprimerProduit dans le panier
      panier: state.panier = panierAJour.panier
    });
  }
}
