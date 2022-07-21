import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoursFormBuilderComponent } from './new-cours-form-builder.component';

describe('NewCoursFormBuilderComponent', () => {
  let component: NewCoursFormBuilderComponent;
  let fixture: ComponentFixture<NewCoursFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCoursFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoursFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
