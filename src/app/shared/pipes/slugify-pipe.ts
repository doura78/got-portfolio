import { Pipe, PipeTransform } from '@angular/core';

// Décorateur pipe
@Pipe({
  name: 'slugify', //Nom de la pipe
})
export class SlugifyPipe implements PipeTransform {

  //  Méthode transform Obligatoire pour créer une pipe. On transforme la valeur
  transform(value: string | undefined): string | undefined {
    if (!value) return '';
    return value.toLowerCase().replace( /\s+/g,  '_')
  }

}
