import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuizData } from './quiz-model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private score: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private quizTaken: boolean = false;
  private currentQuizName: string = '';
  private currentQuizID: number = 0;
  constructor(private http: HttpClient){};

  quiz: Observable<QuizData[]> = this.http.get<QuizData[]>('http://localhost:3000/api/quiz');

  getQuiz(): Observable<QuizData[]> {
    return this.quiz;
  }

  checkAnswer(questionId: number, answer: string): void {
    this.quiz.subscribe((quiz: QuizData[]) => {
      const question = quiz.flatMap(q => q.questions).find(q => q.id === questionId);
      if (question && question.answer === parseInt(answer, 10)) {
        this.score.next(this.score.getValue() + 1);
      }
    });
  }

  getScore(): Observable<number> {
    return this.score.asObservable();
  }
  
  // getQuizLength(): Observable<number>  {
  //   return this.quiz.pipe(map(quizData => quizData.reduce((total, quiz) => total + quiz.questions.length, 0)));
  // }

  getQuizLength(): Observable<number>  {
    return this.quiz.pipe(map((quizData: QuizData[]) => {
      const quiz = quizData.find(q => q.quiz_name === this.currentQuizName);
      return quiz ? quiz.questions.length : 0;
    }));
  }

  getQuizStatus():boolean{
    return this.quizTaken;
  }

  setQuizTaken():void{
    this.quizTaken = true;
  }

  resetScore(): void {
    this.score.next(0);
    this.quizTaken = false;
  }

  setCurrentQuizName(name: string): void {
    this.currentQuizName = name;
  }

  getCurrentQuizID(): number{
    return this.currentQuizID
  }

  setCurrentQuizID(quizID: number): void{
    this.currentQuizID = quizID
  }
}
