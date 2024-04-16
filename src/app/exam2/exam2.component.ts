import { Component } from '@angular/core';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';
import { Question } from '../Question';
import { mockQuestions } from '../mockData';
import { QuestionType } from '../enums';
import { ResultService } from '../services/result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ne4-exam2',
  templateUrl: './exam2.component.html',
  styleUrls: ['./exam2.component.css']
})

export class Exam2Component {
  
    questions = mockQuestions;
    questionType = QuestionType;
    currQuestion: Question | undefined = undefined;
  
    userAnswer: string = '';
    selectedOption: string = '';
    selectedOptionS: string[] = [];
  
    isAnswerCorrect: boolean = false;
    isQuestionAnswered: boolean = false;

    abortConditionPercent: number = 99;

    // Zustand für beantworteten Fraggen:
    answeredQuestions: Set<number> = new Set<number>();
  
    constructor( private answerService: AnswerService, 
                 private questionService: QuestionService,
                 private resultService: ResultService,
                 private router: Router ) { }
  
    ngOnInit(): void {
      this.resultService.resetProgress();
      this.resultService.startExamModus();
      this.questionService.goToFirst();
      this.currentQuestion();
    }
  
    currentQuestion() : Question{
      this.currQuestion = this.questionService.goToCurrentQuestion();
      this.selectedOptionS = [];
      if (this.answeredQuestions.has(this.currQuestion.id)) {
        this.isQuestionAnswered = true;
        this.loadAnswerForCurrQuestion();
      } else {
        this.isQuestionAnswered = false;
      }
      return this.currQuestion;
    }

    loadAnswerForCurrQuestion() : void {
      if (this.currQuestion) {
        if (this.currQuestion.type === this.questionType.SingleChoice) {
          this.selectedOption = this.resultService.getAnswerForQuestion(this.currQuestion.id) as string;
        } else if (this.currQuestion.type === this.questionType.MultipleChoice) {
          this.selectedOptionS = this.resultService.getAnswerForQuestion(this.currQuestion.id) as string[];
        } else if (this.currQuestion.type === this.questionType.FillIn) {
          this.userAnswer = this.resultService.getAnswerForQuestion(this.currQuestion.id) as string;
        }
      }
    }
  
    previousQuestion() : void {
      this.questionService.goToPreviousQuestion();
      this.currentQuestion(); // Lade die vorherige Frage
      // this.resetFeedback();
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
  
    nextQuestion() : void {
      if (this.isQuestionAnswered) {
        this.questionService.goToNextQuestion();
        this.currentQuestion();
        return;
      }
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

        if (!this.answeredQuestions.has(this.currQuestion.id)) {
          this.resultService.setAnswerForQuestion(this.currQuestion.id, this.userAnswer || this.selectedOption || this.selectedOptionS);
          this.answeredQuestions.add(this.currQuestion.id);
        }
  
        if (isCorrect) {
          this.resultService.setProgress(1,0,0);
        } else {
          this.resultService.setProgress(0,1,0);
        }

        // Markiere die Frage als beantwortet
        // this.resultService.setAnswerForQuestion(this.currQuestion.id, isCorrect ? 'correct' : 'incorrect');
        console.log(this.resultService.questionAnswers);
    
        if (this.resultService.getProgress().wrongAnswers >= (((this.questions.length)/100)*this.abortConditionPercent) ) {
          alert(`---> you answered ${this.resultService.getProgress().wrongAnswers} out of ${this.questions.length} questions (${this.abortConditionPercent}%) incorrectly. <---\n---> Exit exam mode <---`)
          this.finishExamMode();
        } else {
          if (this.currQuestion!.id < this.questions.length) {
            this.questionService.goToNextQuestion();
            this.currentQuestion();
          } else {
            this.finishExamMode();
          }
          // this.resetFeedback();
        }
      }
    }
  
  
    finishExamMode() : void {
      this.router.navigate(['/result']);
    }
  
    // resetFeedback() : void {
    //   this.isAnswerCorrect = false;
    //   this.userAnswer = '';
    //   this.selectedOption = '';
    //   this.selectedOptionS = [];
    // }
    

}




