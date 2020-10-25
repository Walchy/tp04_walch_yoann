import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './components/accueil/accueil.component';
import {CompteFormComponent} from './components/compte-form/compte-form.component';
import {RecapitulatifComponent} from './components/recapitulatif/recapitulatif.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {path: 'accueil', component: AccueilComponent},
  {path: 'inscription', component: CompteFormComponent},
  {path: 'recapitulatif', component: RecapitulatifComponent},
  { path: 'boutique',
    loadChildren: () => import('./boutique/boutique.module').then(m => m.BoutiqueModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
