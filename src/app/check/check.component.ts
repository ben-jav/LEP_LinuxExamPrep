import { Component } from '@angular/core';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';
import { Question } from '../Question';
import { mockQuestions } from '../mockData';
import { QuestionType } from '../enums';

@Component({
  selector: 'ne4-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  questions = mockQuestions;
  questionType = QuestionType;
  currQuestion: Question | undefined = undefined;

  userAnswer: string = '';
  selectedOption: string = '';
  selectedOptionS: string[] = [];

  showFeedback: boolean = false;
  isAnswerCorrect: boolean = false;

  constructor(private answerService: AnswerService, 
              private questionService: QuestionService) { }

  ngOnInit(): void {
    this.currentQuestion();
  }

  currentQuestion() : Question {
    this.currQuestion = this.questionService.goToCurrentQuestion();
    this.selectedOptionS = [];
    return this.currQuestion;
  }

  previousQuestion() : void {
    this.questionService.goToPreviousQuestion();
    this.currentQuestion(); // Lade die vorherige Frage
    this.resetFeedback();
  }

  isSelected(option: string) : boolean {
    return this.selectedOptionS.includes(option);
  }

  toggleSelection(option: string) : void {
    if (this.isSelected(option)) {
      // Option abwählen, falls bereits ausgewählt
      this.selectedOptionS = this.selectedOptionS.filter(item => item !== option);
    } else {
      // Option auswählen, falls noch nicht ausgewählt
      this.selectedOptionS.push(option);
    }
  }

  checkAndNextQuestion() : void {
    let isCorrect = false;

    if (this.currQuestion) {
      if (this.currQuestion?.type === this.questionType.SingleChoice) {
        isCorrect = this.answerService.checkAnswer(this.currQuestion, this.selectedOption)
      } else if (this.currQuestion?.type === this.questionType.MultipleChoice) {
        isCorrect = this.answerService.checkAnswer(this.currQuestion, this.selectedOptionS)
      } else if (this.currQuestion?.type === this.questionType.FillIn) {
        isCorrect = this.answerService.checkAnswer(this.currQuestion, this.userAnswer)
      }
  
      this.isAnswerCorrect = isCorrect;
      this.showFeedback = true;
  
      if (isCorrect) {
        alert('Correct answer!')
      } else {
        alert(`Wrong answer! The correct answer is: ${this.currQuestion?.answer}`)
      }
  
      if (this.currQuestion!.id < this.questions.length) {
        this.questionService.goToNextQuestion();
        this.currentQuestion();
      } else {
        this.finishCheckMode();
      }
  
      // setTimeout(() => {
      //  this.resetFeedback();
      // }, 10000);
    }
  }

  skipQuestion() : void {
    this.questionService.goToNextQuestion();
    this.currentQuestion();
    this.resetFeedback();
  }

  finishCheckMode() : void {

  }

  resetFeedback() : void {
    this.showFeedback = false;
    this.isAnswerCorrect = false;
    this.userAnswer = '';
    this.selectedOption = '';
    this.selectedOptionS = [];
  }
  
}
