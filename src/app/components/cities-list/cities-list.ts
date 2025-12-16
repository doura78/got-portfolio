import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CitiesModel } from '../../shared/models/cities.model';
import {HoverHighlight} from '../../shared/directives/hover-highlight';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-cities-list',
  imports: [HoverHighlight, ReactiveFormsModule],
  templateUrl: './cities-list.html',
  styleUrl: './cities-list.scss',


})
export class CitiesList {
  @Input() citiesFromParent: CitiesModel[] = [];
  @Output() cityCreated = new EventEmitter<CitiesModel>();

  protected displayCityForm = false;

  protected cityForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    inhabitants: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    typicalDish: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    currency: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    flag: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
  })

  protected addCity() {
    if(this.cityForm.invalid){
      this.cityForm.markAsUntouched();
      return;
    }

    const values = this.cityForm.value;
    console.log(values);
    const newCity: CitiesModel = {
      id: Date.now(),
      name: values.name ?? '',
      inhabitants : values.inhabitants ?? 0,
      typicalDish : values.typicalDish ?? '',
      currency : values.currency ?? '',
      flag : values.flag ?? '',
    }

    this.cityCreated.emit(newCity);
    this.cityForm.reset();
  }

  protected displayAddCityForm() {
    this.displayCityForm = !this.displayCityForm;
  }
}
