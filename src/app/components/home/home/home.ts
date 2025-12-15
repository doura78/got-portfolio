import { Characters } from './../../../shared/models/characters.model';
import { CharacterService } from './../../../shared/service/character';
import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Continents } from '../../../shared/models/continent.model';
import { ChangeDetectorRef } from '@angular/core';
import { ContinentService } from '../../../shared/service/continent';
import { RouterOutlet } from '@angular/router';
import { CharactersList } from '../../characters-list/characters-list';
import { ContinentsList } from '../../continent-list/continent-list';
import { NgClass, NgStyle } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CharactersList, ContinentsList, NgClass, NgStyle],
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

  protected isSelected = false;
  protected isWarning = true;
  protected isActive = false;
  protected isOnline = true;
  protected colorCrimson = 'blue';

  protected toogleSelected(): void {
    this.isSelected = !this.toogleSelected;
  }

  // On subscribe uniquement les observables
  ngOnInit() {
    this.getCharactersInTemplate();
    this.getAllContinentsInTemplate();
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  protected onSearch(term: string): void {
    this.filterCharacters = this.charactersToGiveToChild.filter((character: Characters) => {
      const fullName = character.fullName ?? '';
      return fullName.toLowerCase().includes(term.toLowerCase());
    });
  }

  private getAllContinentsInTemplate(): void {
   this.subscriptions.push(this.continentService.getAllContinents().subscribe((ContinentsFromApi: Continents[]) => {
      this.continentsToGiveToChild = ContinentsFromApi;
      this.cdr.detectChanges();
    }));
  }
  private getCharactersInTemplate(): void {
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
