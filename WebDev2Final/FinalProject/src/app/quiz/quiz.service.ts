import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // private questions: any[] = [
  //   {
  //     id: 1,
  //     text: 'Answer is number 1',
  //     options: [
  //       { id: 1, text: '1' },
  //       { id: 2, text: '2' },
  //       { id: 3, text: '3' },
  //       { id: 4, text: '4' }
  //     ],
  //     answer: 1
  //   },
  //   {
  //     id: 2,
  //     text: 'Answer is number 2',
  //     options: [
  //       { id: 1, text: '1' },
  //       { id: 2, text: '2' },
  //       { id: 3, text: '3' },
  //       { id: 4, text: '4' }
  //     ],
  //     answer: 2
  //   },
  //   {
  //     id: 3,
  //     text: 'Answer is number 3',
  //     options: [
  //       { id: 1, text: '1' },
  //       { id: 2, text: '2' },
  //       { id: 3, text: '3' },
  //       { id: 4, text: '4' }
  //     ],
  //     answer: 3
  //   }
  // ];

  private score: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private quizTaken: boolean = false;

  constructor(private http: HttpClient){};

  questions = this.http.get<any[]>('http://localhost:3000/api/quiz')

  getQuestions(): Observable<any[]> {
    return this.questions;
  }

  checkAnswer(questionId: number, answer: string): void {
    this.questions.subscribe(questions => {
      const question = questions.find(q => q.id === questionId);
      if (question.answer === answer) {
        this.score.next(this.score.getValue() + 1);
      }
    });
  }

  getScore(): Observable<number> {
    return this.score.asObservable();
  }

  // getQuizLength(): number {
  //   return this.questions.length;
  // }
  
  getQuizLength(): Observable<number>  {
    return this.questions.pipe(map(questions => questions.length));
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
}
