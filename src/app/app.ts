import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersList } from './components/characters-list/characters-list';
import { CharacterService } from './shared/service/character';
import { Characters } from './shared/models/characters.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  // On injecte le service précedemment créé
  private characterService = inject(CharacterService);

  //On stock tous les personnages dans un tableau
  protected charactersToGiveToChild! : Characters[]; // le ! ne donnera pas de valeur d'initialisation (=....)
  protected dragonBallZ : string[] = ["Goku", "Vegeta", "Freezer", "Cell", "Buu"];


  // On subscribe uniquement les observables
  ngOnInit() {
    this.characterService.getCharacters().subscribe((CharactersFromApi: Characters[]) => {
      this.charactersToGiveToChild = CharactersFromApi;
      console.log(CharactersFromApi)

    });
  }

}
