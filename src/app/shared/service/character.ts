import { Characters } from './../models/characters.model';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl = 'https://thronesapi.com/api/v2/Characters';
  private httpClient = inject(HttpClient);

  getCharacters() : Observable<Characters[]> {
    return this.httpClient.get<Characters[]>(this.charactersUrl);
  }
}
