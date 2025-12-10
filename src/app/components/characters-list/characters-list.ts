import { Characters } from './../../shared/models/characters.model';
import { Component } from '@angular/core';
import {Characters} from '../../shared/models/characters.model';


@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  protected newCharacter: Characters[] = [
  {
    id: 1,
    firstName: 'Abdouramane',
    lastName: 'Sidibé',
    fullName: ' Abdouramane Sidibé',
    title: 'Le roi de la BO',
    family: 'GSP',
    image: '',
    imageUrl: '',
  }
protected CharactersFromApi: Characters[] = [
  {
    id: 1,
    firstName: 'Coralyne',
    lastName: 'Sidibé',
    fullName: ' Coralyne Sidibé',
    title: 'The queen of my heart',
    family: 'SiDynasty',
    image: '',
    imageUrl: '',
  },
  {
    id: 2,
    firstName: 'Lyna',
    lastName: 'Sidibé',
    fullName: ' Lyna Sidibé',
    title: 'My little heart',
    family: 'SiDynasty',
    image: '',
    imageUrl: '',
  },
  {
    id: 1,
    firstName: 'Nour',
    lastName: 'Sidibé',
    fullName: ' Nour Sidibé',
    title: 'My baby',
    family: 'SiDynasty',
    image: '',
    imageUrl: '',
  },
];
