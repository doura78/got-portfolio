import { Continents } from '../models/continent.model';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private continentsUrl = 'https://thronesapi.com/api/v2/Continents';
  private httpClient = inject(HttpClient);


  getAllContinents() : Observable<Continents[]> {
    return this.httpClient.get<Continents[]>(this.continentsUrl);
    }
}


