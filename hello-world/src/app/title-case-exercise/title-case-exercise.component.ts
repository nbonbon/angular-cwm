import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-case-exercise',
  templateUrl: './title-case-exercise.component.html',
  styleUrls: ['./title-case-exercise.component.css']
})
export class TitleCaseExerciseComponent implements OnInit {
  title: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
