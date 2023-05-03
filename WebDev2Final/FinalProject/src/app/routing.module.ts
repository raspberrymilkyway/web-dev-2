import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz/quiz.component';

// https://angular.io/tutorial/tour-of-heroes/toh-pt5

const routes: Routes = [
  { path: 'quiz', component: QuizComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
