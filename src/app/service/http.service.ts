/* tslint:disable:no-trailing-whitespace */
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../../../shared/models/Produit';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private URLBOUCHON: string = environment.urlDuBouchon;
  constructor(private http: HttpClient) {}

  GetData(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.URLBOUCHON);
  }
}
