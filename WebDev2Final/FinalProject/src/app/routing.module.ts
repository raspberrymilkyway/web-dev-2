import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { QuizSelectionComponent } from './quiz/quiz-selection/quiz-selection.component';
import { MakeQuizComponent } from './quiz/make-quiz/make-quiz.component';

// https://angular.io/tutorial/tour-of-heroes/toh-pt5

const routes: Routes = [
  { path: 'quiz-select', component: QuizSelectionComponent},
  { path: 'make-quiz', component: MakeQuizComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
