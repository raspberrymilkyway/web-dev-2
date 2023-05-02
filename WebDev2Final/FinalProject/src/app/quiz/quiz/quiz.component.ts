import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';

import { Answer } from '../answer-model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  questions: any[] = [];
  answers: Answer[] = []
  quizTaken: boolean = false;
  private quizSub: Subscription = new Subscription(); // subscription for observer

  constructor(private quizService: QuizService) { }

  ngOnInit() { // retrieve question from server and store them in the questions array
    this.quizSub = this.quizService.getQuestions().subscribe((data: any[]) => {
      this.questions = data;
      this.questions.forEach(q => this.answers.push({ question: q.id, answer: '' })); // creates empty answer object for each quiz question so the user answer may be stored and graded later on
    });
    this.quizTaken = this.quizService.getQuizStatus();
  }

  ngOnDestroy(){
    this.quizSub.unsubscribe();
  }

  onSubmit(): void {
    this.answers.forEach(answer => {
      this.quizService.checkAnswer(answer.question, answer.answer);
    });
    this.quizTaken = true;
    this.quizService.setQuizTaken();
  }

  resetQuiz(): void {
    this.quizTaken = false;
    this.quizService.resetScore();
    this.answers = this.answers.map(answer => ({ question: answer.question, answer: '' }));
  }

}
