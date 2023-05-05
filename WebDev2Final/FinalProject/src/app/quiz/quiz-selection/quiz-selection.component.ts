import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { QuizData } from '../quiz-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {
  quizzes: QuizData[] = [];
  private quizSub: Subscription = new Subscription();
  quizSelected = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizSub = this.quizService.getQuiz().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

  selectQuiz(quizID: number): void {
    this.quizService.setCurrentQuizID(quizID);
    this.quizSelected = true;
  }

  ngOnDestroy(){
    this.quizSub.unsubscribe();
  }
}