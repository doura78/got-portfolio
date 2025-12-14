import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


// 1. Dans votre html, vous allez créer un bouton.
// 2. Ajouter et binder avec une fonction au click.
// 3. Créer une div avec un texte (balise h1).
// 4. Dans votre .ts, vous allez créer une fonction et une variable, cette fonction va changer l'état de la variable (toggle).
// 5. 1 cas avec plusieurs styles a la fois. 1 cas avec une condition ternaire. 1 cas avec un et un seul style. 1 cas avec une et une seule classe.



