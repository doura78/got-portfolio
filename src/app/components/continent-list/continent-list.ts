import { Component, Input } from '@angular/core';
import { Continents } from '../../shared/models/continent.model';

@Component({
  selector: 'app-continent-list',
  imports: [],
  templateUrl: './continent-list.html',
  styleUrl: './continent-list.scss',
})
export class ContinentsList {
  @Input() continentsFromParent! : Continents[];

}
