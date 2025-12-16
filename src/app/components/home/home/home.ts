import { Characters } from './../../../shared/models/characters.model';
import { CharacterService } from './../../../shared/service/character';
import {  ChangeDetectorRef, AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Continents } from '../../../shared/models/continent.model';
import { ContinentService } from '../../../shared/service/continent';
import { CharactersList } from '../../characters-list/characters-list';
import { ContinentsList } from '../../continent-list/continent-list';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CharactersList, ContinentsList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit, OnDestroy {
  // Accès à un élémént HTML par sa éférence(#searchInput dans notre cas)
  @ViewChild('searchInput') private input! : ElementRef<HTMLInputElement>

  // On injecte le service précedemment créé
  private characterService = inject(CharacterService);
  private continentService = inject(ContinentService);
  private cdr = inject(ChangeDetectorRef);

  //On stock tous les personnages dans un tableau
  private subscriptions: Subscription[] = [];
  protected charactersToGiveToChild!: Characters[]; // le ! ne donnera pas de valeur d'initialisation (=....)
  protected continentsToGiveToChild!: Continents[];
  protected filterCharacters!: Characters[];

  // On subscribe uniquement les observables
  ngOnInit() {
    this.getCharactersInTemplate();
    this.getAllContinentsInTemplate();
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  protected onSearch(term: string) {
    this.filterCharacters = this.charactersToGiveToChild.filter((character: Characters) => {
      const fullName = character.fullName ?? '';
      return fullName.toLowerCase().includes(term.toLowerCase());
    });
  }

  private getAllContinentsInTemplate(){
   this.subscriptions.push(this.continentService.getAllContinents().subscribe((ContinentsFromApi: Continents[]) => {
      this.continentsToGiveToChild = ContinentsFromApi;
      this.cdr.detectChanges();
    }));
  }
  private getCharactersInTemplate() {
    this.subscriptions.push(this.characterService.getCharacters().subscribe((charactersFromApi: Characters[]) => {
      this.charactersToGiveToChild = charactersFromApi;
      this.filterCharacters = charactersFromApi;
      this.cdr.detectChanges();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) : void => subscription.unsubscribe())
  }
}
