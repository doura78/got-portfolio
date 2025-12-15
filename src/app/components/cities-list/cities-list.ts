import { Component, Input } from '@angular/core';
import { CitiesModel } from '../../shared/models/cities.model';

@Component({
  selector: 'app-cities-list',
  imports: [],
  templateUrl: './cities-list.html',
  styleUrl: './cities-list.scss',
})
export class CitiesList {
@Input() citiesFromParent : CitiesModel[] = [];
}
