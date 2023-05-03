import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { GradeComponent } from './quiz/grade/grade.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

// import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    GradeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    // RouterModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
