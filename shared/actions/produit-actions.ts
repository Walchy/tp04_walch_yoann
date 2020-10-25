import {Produit} from '../models/Produit';

export class AjouterProduit {
  static readonly type = '[Produit] Ajouter Produit';
  constructor(public produitEnParamDeAjouterProduit: Produit) {}
}

export class SupprimerProduit {
  static readonly type = '[Produit] Supprimer Produit';
  constructor(public produitEnParamDeSupprimerProduit: Produit) {}
}
