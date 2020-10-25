import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {Produit} from '../../../../shared/models/Produit';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Store} from '@ngxs/store';
import {AjouterProduit} from '../../../../shared/actions/produit-actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})

export class CatalogueComponent implements OnInit {
  @Input() listeDeProduits: Observable<Produit[]>;
  listeDeProduitsFiltres: Observable<Produit[]>;

  constructor(private router: Router, private httpService: HttpService, private store: Store) {
  }

  ngOnInit(): void {
    this.listeDeProduits = this.httpService.GetData();
    this.listeDeProduitsFiltres = this.listeDeProduits;
  }

  OnChangeFilter(typeDeFiltre: string): void {
    this.listeDeProduitsFiltres = this.listeDeProduits.pipe(
      map((data: Produit[]) => {
        return data.filter((produit: Produit) => {
          switch (typeDeFiltre) {
            case 'poudre':
              return produit.nom.toLowerCase().includes('poudre de perlinpin');
            case 'poids':
              return produit.poids > 100;
            default:
              return true;
          }
        });
      }));
  }

  ajouterProduitAuPanier(produit: Produit): void {
    // on passe l'action AjouterProduit
    this.store.dispatch(new AjouterProduit(produit));

  }
  onAjoutAuPanier(produit: Produit): void {
    this.ajouterProduitAuPanier(produit);
  }

  // voir détail produit
  onClickProduit(produit: Produit): void {
    this.router.navigate(['/detail'], {queryParams: produit})
  }
}
