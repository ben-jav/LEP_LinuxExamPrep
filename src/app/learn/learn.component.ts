import { Component, OnInit } from '@angular/core';
import { mockQuestions } from '../mockData';
import { QuestionType } from '../enums';
import { Question } from '../Question';
import { QuestionService } from '../services/question.service';

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
  currQuestion: Question | undefined = undefined;

  constructor(private questionService: QuestionService) { }

  ngOnInt() : void {
  }

  toggleView() : void {
    this.singleView = !this.singleView;
  }

  currentQuestion() : Question {
    // this.currQuestion = this.questionService.goToCurrentQuestion();
    this.currQuestion = this.questions[this.currentIndex];
    return this.currQuestion;
  }
  previousQuestion() : void {
    // this.questionService.goToPreviousQuestion();
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  nextQuestion() : void {
    // this.questionService.goToNextQuestion();
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
