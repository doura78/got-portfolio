import { Continents } from '../models/continent.model';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private continentsUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);


  getAllContinents() : Observable<Continents[]> {
    return this.httpClient.get<Continents[]>(this.continentsUrl + '/Continents');
    }
}


