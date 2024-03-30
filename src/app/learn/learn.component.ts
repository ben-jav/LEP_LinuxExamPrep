import { Component, OnInit } from '@angular/core';
import { mockQuestions } from '../mockData';
import { QuestionType } from '../enums';
import { Question } from '../Question';

@Component({
  selector: 'ne4-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  questions = mockQuestions;
  questionType = QuestionType;
  showingAnswerIndex: number | null = null;
  answer: string = '';

  singleView: boolean = false;
  currentIndex: number = 0;

  constructor() { }

  ngOnInt() : void {
  }

  toggleView() : void {
    this.singleView = !this.singleView;
  }
  get currentQuestion() : Question {
    return this.questions[this.currentIndex];
  }
  previousQuestion() : void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  nextQuestion() : void {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  showAnswer(i: number) : void {
    this.showingAnswerIndex = i;
    if (this.questions[i].type === this.questionType.FillIn) {
      if (typeof(this.questions[i].answer) === 'string') {
        this.answer = this.questions[i].answer as string;
      }
    } 
    // else if (this.questions[i].type === this.questionType.SingleChoice) {
    //   if (this.questions[i].options !== undefined) {
        
    //     var tmp: number = this.questions[i].answer as number;
    //     this.answer = this.questions[i].options[tmp]
    //   }
    // }
  }
}
