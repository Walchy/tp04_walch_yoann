import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Produit} from '../../../../shared/models/Produit';
import {AjouterProduit} from '../../../../shared/actions/produit-actions';
import {Store} from '@ngxs/store';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  produit: Produit;
  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    // this.produit.nom = this.route.snapshot.paramMap.get('nom'); si on met path: detail/:nom
    // this.produit.id = this.route.snapshot.paramMap.get('id'); ou detail/:id si j'avais un id
    //  dans app-routing.module.ts

    this.route.queryParams.subscribe(params => {
       this.produit = params as Produit;
    });
  }

  ajouterProduitAuPanier(produit: Produit): void {
    // on passe l'action AjouterProduit
    this.store.dispatch(new AjouterProduit(produit));
  }
  onAjoutAuPanier(produit: Produit): void {
    this.ajouterProduitAuPanier(produit);
  }
}
