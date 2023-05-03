import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {
  score = 0;
  total = 0;
  private quizSub: Subscription = new Subscription(); // subscription for observer
  private quizSub1: Subscription = new Subscription(); // subscription for observer

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizSub = this.quizService.getScore().subscribe((score: number) => {
      this.score = score;
      this.quizSub1 = this.quizService.getQuizLength().subscribe((length: number) => {
        this.total = length;
      });
    });
  }
  ngOnDestroy(){
    this.quizSub.unsubscribe();
    this.quizSub1.unsubscribe();
  }

}
