import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-exercise',
  template: `
    <span class="glyphicon"
    [class.glyphicon-star]="isFavorite"
    [class.glyphicon-star-empty]="!isFavorite"
    (click)="onClick()"
    ></span>
  `
})
export class FavoriteExerciseComponent implements OnInit {
  isFavorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
