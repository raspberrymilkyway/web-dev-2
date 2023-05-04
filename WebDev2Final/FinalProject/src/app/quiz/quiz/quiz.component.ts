import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Answer } from '../answer-model';
import { QuizData } from '../quiz-model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {

  questions: QuizData['questions'] = [];
  answers: Answer[] = [];
  quizName = '';
  quizTaken = false;
  currentQuizID: number | undefined;
  private quizSub: Subscription = new Subscription();

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    if (this.quizService.getCurrentQuizID() !== undefined) {
      this.quizSub = this.quizService.getQuiz()
        .subscribe((quiz: QuizData[]) => {
          this.currentQuizID = this.quizService.getCurrentQuizID();
          this.quizName = quiz[this.currentQuizID].quiz_name;
          this.questions = quiz[this.currentQuizID].questions;
          this.answers = this.questions.map(q => ({ questionID: q.id, answer: '' }));
          this.quizService.setCurrentQuizName(this.quizName);
          this.quizTaken = this.quizService.getQuizStatus();
        });
    }
  }
  
  ngOnDestroy(): void {
    this.quizSub.unsubscribe();
  }

  onSubmit(): void {
    this.answers.forEach(answer => {
      this.quizService.checkAnswer(answer.questionID, answer.answer);
    });
    this.quizTaken = true;
    this.quizService.setQuizTaken();
  }

  resetQuiz(): void {
    this.quizTaken = false;
    this.quizService.resetScore();
    this.answers = this.answers.map(answer => ({ questionID: answer.questionID, answer: '' }));
  }

}