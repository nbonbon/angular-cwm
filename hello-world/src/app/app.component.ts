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

  onFavoriteChanged() {
    console.log("Favorite changed");
  }
}
