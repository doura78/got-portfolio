import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Data } from '@angular/router';
import {Countries} from '../../shared/models/countries.model';
@Component({
  selector: 'app-countries',
  imports: [Countries],
  templateUrl: './countries.html',
  styleUrl: './countries.scss',
})
export class Countries implements OnInit {
  protected currentTitle: string = '';
  protected countries: CountriesModel[]= [];
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private titleService: Title = inject(Title);

  ngOnInit(): void {
    this.getCountries();
    this.currentTitle = this.titleService.getTitle();
  }

  protected changeTitle(): void {
    this.titleService.setTitle('Pays');
    this.currentTitle = this.titleService.getTitle();
    console.log(this.currentTitle);
  }

  private getCountries()  {
    this.activatedRoute.data.subscribe((data : Data):void => {
      this.countries = data['countries'] ;
    })
  }
}
