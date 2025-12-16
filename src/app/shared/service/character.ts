import { Characters } from './../models/characters.model';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);

  public getCharacters() : Observable<Characters[]> {
    return this.httpClient.get<Characters[]>(this.charactersUrl + '/Characters');
  }
}
