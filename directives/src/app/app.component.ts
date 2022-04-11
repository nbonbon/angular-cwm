import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: number[] = [1, 2];
  // courses: number[] = [];

  viewMode = 'map';

  classes = [
    { id: 1, name: 'class1' },
    { id: 2, name: 'class2' },
    { id: 3, name: 'class3' }
  ];
}
