import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors',
  template: `
      <h2>{{ numAuthors }} Authors</h2>
      <ul>
          <li *ngFor="let author of authors">
              {{ author }}
          </li>
      </ul>  
  `
})
export class AuthorsComponent {
  numAuthors = -1;
  authors;

  constructor(service: AuthorService) {
      this.authors = service.getAuthors();
      this.numAuthors = this.authors.length;
  }
}
