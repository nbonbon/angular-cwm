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

  onAdd() {
    this.classes.push({ id: 4, name: 'class4'});
  }

  onRemove(classs: any) {
    let index = this.classes.indexOf(classs);
    this.classes.splice(index, 1);
  }

  onChange(classs: any) {
    classs.name = classs.name + " - UPDATED";
  }
}
