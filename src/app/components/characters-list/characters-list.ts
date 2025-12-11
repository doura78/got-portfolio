import { Component, Input } from '@angular/core';
import {Characters} from '../../shared/models/characters.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
@Input() charactersFromParent! : Characters[];

private flippedCards = new Set<number>();

toggleCard(id: number): void {
    if (this.flippedCards.has(id)) {
      this.flippedCards.delete(id);
    } else {
      this.flippedCards.add(id);
    }
  }

  isCardFlipped(id: number): boolean {
    return this.flippedCards.has(id);
  }
}

