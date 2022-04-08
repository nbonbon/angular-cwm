import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    tite: "Title",
    isFavorite: true
  }

  onFavoriteChanged(isFavorite: boolean) {
    console.log("Favorite changed: ", isFavorite);
  }
}
