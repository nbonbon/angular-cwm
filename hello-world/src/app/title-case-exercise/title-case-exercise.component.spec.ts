import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCaseExerciseComponent } from './title-case-exercise.component';

describe('TitleCaseExerciseComponent', () => {
  let component: TitleCaseExerciseComponent;
  let fixture: ComponentFixture<TitleCaseExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCaseExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCaseExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
