import { Home } from './components/home/home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Home }, // Eager loading- pour les pages directement présentes comme les homepage à l'inverse
  { path: 'home', redirectTo: '', pathMatch: 'full' }, //redirection
  {path: 'countries',
    loadComponent: (): any =>
      import('./components/countries/countries').then(
        (component) : any => component.Countries), title: 'Countries'
// Lazy-loading : Charger dynamiquement le composant. Si la route n'est pas activée, Le composant n'est pas chargé
        data: {
          countries: [
            {id: 1, name: 'France'},
            {id: 2, name: 'USA'},
            {id: 3, name: 'Germany'},
            {id: 4, name: 'Spain'}
          ]
        }
      },

];
