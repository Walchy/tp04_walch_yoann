/* tslint:disable:no-trailing-whitespace */
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../Produit';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  GetData(): Observable<Produit[]> {
    return this.http.get<Produit[]>('/assets/mock/resultat-requete.json');
  }
}
