import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: any[] = [
    {
      id: 1,
      text: 'Answer is number 1',
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' }
      ],
      answer: 1
    },
    {
      id: 2,
      text: 'Answer is number 2',
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' }
      ],
      answer: 2
    },
    {
      id: 3,
      text: 'Answer is number 3',
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' }
      ],
      answer: 3
    }
  ];

  private score: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private quizTaken: boolean = false;

  getQuestions(): Observable<any[]> {
    return new Observable<any[]>(subscriber => {
      subscriber.next(this.questions);
      subscriber.complete();
    });
  }

  checkAnswer(questionId: number, answer: string): void {
    const question = this.questions.find(q => q.id === questionId);
    if (question.answer === answer) {
      this.score.next(this.score.getValue() + 1);
    }
  }

  getScore(): Observable<number> {
    return this.score.asObservable();
  }

  getQuizLength(): number {
    return this.questions.length;
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
