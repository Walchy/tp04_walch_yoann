import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {Produit} from '../../Produit';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-afficher-liste-de-produits',
  templateUrl: './afficher-liste-de-produits.component.html',
  styleUrls: ['./afficher-liste-de-produits.component.scss']
})

export class AfficherListeDeProduitsComponent implements OnInit {
  @Input() listeDeProduits: Observable<Produit[]>;
  listeDeProduitsFiltres: Observable<Produit[]>;

  constructor(private httpService: HttpService) {
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
}
