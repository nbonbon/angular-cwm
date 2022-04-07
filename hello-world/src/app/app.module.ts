import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';
import { FormsModule } from '@angular/forms';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteExerciseComponent } from './favorite-exercise/favorite-exercise.component';
import { FavoriteComponent } from './favorite.component';
import { TitleCaseExerciseComponent } from './title-case-exercise/title-case-exercise.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    CustomPipeComponent,
    SummaryPipe,
    FavoriteExerciseComponent,
    FavoriteComponent,
    TitleCaseExerciseComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
