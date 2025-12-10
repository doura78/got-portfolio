import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersList } from './components/characters-list/characters-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('got-portfolio');
}
