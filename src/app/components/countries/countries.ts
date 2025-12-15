import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Data } from '@angular/router';
import { CountriesModel } from '../../shared/models/countries.model';
@Component({
  selector: 'app-countries',
  imports: [RouterOutlet],
  templateUrl: './countries.html',
  styleUrl: './countries.scss',
})
export class Countries implements OnInit {
  protected currentTitle: string = '';
  protected countries: CountriesModel[]= [];
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
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

  protected goToCountryDetails(id: number) :void{
    this.router.navigate(['/countries', id]);
  }
}
