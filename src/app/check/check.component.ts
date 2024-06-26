import { Component } from '@angular/core';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';
import { Question } from '../Question';
import { mockQuestions } from '../mockData';
import { QuestionType } from '../enums';
import { ResultService } from '../services/result.service';
import { Router } from '@angular/router';

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
  
  // for selected number of questions v2
  numberOfQuestions: number = 0;
  desiredNumber: boolean | undefined = undefined;
  allButRandom: boolean = false;
  randomIndex: number[] = [];
  

  constructor(private answerService: AnswerService, 
              private questionService: QuestionService,
              private resultService: ResultService,
              private router: Router) { }

  ngOnInit(): void {
    this.resultService.resetProgress();
    this.resultService.startCheckModus();
    if (!this.desiredNumber) {
      this.questionService.goToFirst();
    } else if(this.desiredNumber === true) {
      this.questionService.goToFirstV2();
    }
    this.currentQuestion();
  }

  setDesiredNumberTrue() : void {
    this.randomIndex = this.questionService.createRandom(this.numberOfQuestions);
    this.desiredNumber = true;
  }
  setDesiredNumberFalse() : void {
    this.desiredNumber = false;
  }
  allQuestionsButRandom() : void {
    this.numberOfQuestions = this.questions.length;
    this.setDesiredNumberTrue();
    this.allButRandom = true;
  }

  currentQuestion() : Question {
    if (!this.desiredNumber) {
      this.currQuestion = this.questionService.goToCurrentQuestion();
    } else {
      this.currQuestion = this.questionService.goToCurrentQuestionV2();
    }
    this.selectedOptionS = [];
    return this.currQuestion;
  }

  previousQuestion() : void {
    if (!this.desiredNumber) {
      this.questionService.goToPreviousQuestion();
    } else {
      this.questionService.goToPreviousQuestionV2();
    }
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
        this.resultService.setProgress(1,0,0);
      } else {
        this.resultService.setProgress(0,1,0);
      }
  
      if (isCorrect) {
        alert('---> Correct answer! <---')
      } else {
        alert(`---> Wrong answer! The correct answer is: ${this.currQuestion?.answer} <---`)
      }
  
      if (this.resultService.getProgress().wrongAnswers >= 7) {
        alert('---> you answered 7 questions incorrectly <---\n---> please use learn mode <---')
        this.finishCheckMode();
      } else if (!this.desiredNumber) {
        if (this.currQuestion!.id < this.questions.length) {
          this.questionService.goToNextQuestion();
          this.currentQuestion();
        } else {
          this.finishCheckMode();
        }
        this.resetFeedback();
      } else if (this.desiredNumber) {
        if (this.currQuestion.id - 1 !== this.randomIndex[this.randomIndex.length-1]) {
          this.questionService.goToNextQuestionV2();
          this.currentQuestion();
        } else {
          this.finishCheckMode();
        }
      }
    }
  }

  skipQuestion() : void {
    this.resultService.setProgress(0,0,1);
    if (!this.desiredNumber) {
      this.questionService.goToNextQuestion();
    } else {
      this.questionService.goToNextQuestionV2();
    }
    this.currentQuestion();
    this.resetFeedback();
  }

  finishCheckMode() : void {
    this.router.navigate(['/result']);
  }

  resetFeedback() : void {
    this.showFeedback = false;
    this.isAnswerCorrect = false;
    this.userAnswer = '';
    this.selectedOption = '';
    this.selectedOptionS = [];
  }
  
}
