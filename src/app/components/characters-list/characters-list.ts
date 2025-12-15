import { Component, Input } from '@angular/core';
import {Characters} from '../../shared/models/characters.model';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { MoodPipe } from '../../shared/pipes/mood-pipe';

@Component({
  selector: 'app-characters-list',
  imports: [CommonModule, NgClass, NgStyle],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
@Input() charactersFromParent! : Characters[];

private flippedCards = new Set<number>();

protected : number = 0;


protected isReady: boolean = true;
protected color : string = 'red';


protected toggleReady(): void{
  this.isReady = !this.isReady
}

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

