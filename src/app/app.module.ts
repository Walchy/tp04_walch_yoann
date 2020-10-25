import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './boutique/catalogue/catalogue.component';
import { RechercherDesProduitsComponent } from './boutique/rechercher-des-produits/rechercher-des-produits.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccueilComponent } from './components/accueil/accueil.component';
import { TetiereComponent } from './components/tetiere/tetiere.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxsModule} from '@ngxs/store';
import {ProduitState} from '../../shared/states/produit-state';
import {RecapitulatifComponent} from './components/recapitulatif/recapitulatif.component';
import {CompteFormComponent} from './components/compte-form/compte-form.component';
import {FormatPhoneNumberPipe} from './components/format-phone-number.pipe';
import {ControlPascalCaseDirective} from './components/control-pascal-case.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TetiereComponent,
    FooterComponent,
    CompteFormComponent,
    RecapitulatifComponent,
    ControlPascalCaseDirective,
    FormatPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([ProduitState]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
