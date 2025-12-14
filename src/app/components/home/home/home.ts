import { Characters } from './../../../shared/models/characters.model';
import { CharacterService } from './../../../shared/service/character';
import { Component, inject, OnInit } from '@angular/core';
import { Continents } from '../../../shared/models/continent.model';
import { ChangeDetectorRef } from '@angular/core';
import { ContinentService } from '../../../shared/service/continent';
import { RouterOutlet } from '@angular/router';
import { CharactersList } from '../../characters-list/characters-list';
import { ContinentsList } from '../../continent-list/continent-list';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CharactersList, ContinentsList, NgClass, NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  // On injecte le service précedemment créé
  private characterService = inject(CharacterService);
  private continentService = inject(ContinentService);
  private cdr = inject(ChangeDetectorRef);


  //On stock tous les personnages dans un tableau
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
    this.getCharaactersInTemplate();
    this.getAllContinentsInTemplate();
  }

  protected onSearch(term: string): void {
    this.filterCharacters = this.charactersToGiveToChild.filter((character: Characters) => {
      const fullName = character.fullName ?? '';
      return fullName.toLowerCase().includes(term.toLowerCase());
    });
  }

  private getAllContinentsInTemplate() {
    this.continentService.getAllContinents().subscribe((ContinentsFromApi: Continents[]) => {
      this.continentsToGiveToChild = ContinentsFromApi;
      this.cdr.detectChanges();
    });
  }
  private getCharaactersInTemplate() {
    this.characterService.getCharacters().subscribe((CharactersFromApi: Characters[]) => {
      this.charactersToGiveToChild = CharactersFromApi;
      this.filterCharacters = CharactersFromApi;
      console.log(CharactersFromApi);


      this.characterService.getCharacters().subscribe((CharactersFromApi: Characters[]) => {
        this.charactersToGiveToChild = CharactersFromApi;
        console.log(CharactersFromApi)

        this.continentService.getAllContinents().subscribe((ContinentsFromApi: Continents[]) => {
          this.continentsToGiveToChild = ContinentsFromApi;
          this.cdr.detectChanges();
        });

      });
    }
  }
}


