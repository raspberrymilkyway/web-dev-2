import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { GradeComponent } from './quiz/grade/grade.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { QuizSelectionComponent } from './quiz/quiz-selection/quiz-selection.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './routing.module';
import {MatButtonModule} from '@angular/material/button';
import { MakeQuizComponent } from './quiz/make-quiz/make-quiz.component';
import { MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    GradeComponent,
    HeaderComponent,
    FooterComponent,
    QuizSelectionComponent,
    MakeQuizComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
