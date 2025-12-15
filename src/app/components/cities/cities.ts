import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { CitiesList } from '../cities-list/cities-list';
import { CitiesModel } from '../../shared/models/cities.model';

@Component({
  selector: 'app-cities',
  imports: [CitiesList],
  templateUrl: './cities.html',
  styleUrl: './cities.scss',
})
export class Cities implements OnInit {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private titleService: Title = inject(Title);

protected currentTitle: string = '';
protected cities : CitiesModel [] = [];

  

  ngOnInit(): void {
    this.getAllCities();
    this.getTitle();
  }


  private getAllCities() : void {
    this.activatedRoute.data.subscribe((data: Data): void => {
      this.cities = data['cities'];
    
    })
  }

  private getTitle() : void {
    this.currentTitle = this.titleService.getTitle();
  }
}