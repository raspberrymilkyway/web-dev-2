import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { GradeComponent } from './quiz/grade/grade.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    GradeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
