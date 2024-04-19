import { Injectable } from "@angular/core";
import { mockQuestions } from "../mockData";
import { Question } from "../Question";

@Injectable({
    providedIn: 'root'
})

export class QuestionService {
    private questions : Question[] = mockQuestions;
    private currentIndex: number = 0;

    // for selected number of questions - v2
    private randomIndexArray: number[] = [];
    private currentIndexV2: number = -1;
    public tmp: number = 0;

    constructor() { }

    goToFirst() : void {
        this.currentIndex = 0;
    }

    goToCurrentQuestion() : Question {
        return this.questions[this.currentIndex];
    }
    goToPreviousQuestion() : void {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
    }
    goToNextQuestion() : void {
        if (this.currentIndex < this.questions.length - 1) {
          this.currentIndex++;
        }
    }


    // for selected number of questions - v2
    createRandom(n: number) : number[] {
        let uniqueRandomNumbers = new Set<number>();
        while (uniqueRandomNumbers.size < n) {
          let randomNum = Math.floor(Math.random() * this.questions.length);
          uniqueRandomNumbers.add(randomNum);
        }
        this.randomIndexArray = Array.from(uniqueRandomNumbers);
        console.log(this.randomIndexArray);
        return this.randomIndexArray;
    }

    goToFirstV2() : void {
        this.currentIndexV2 = this.randomIndexArray[this.tmp];
    }

    goToCurrentQuestionV2() : Question {
        return this.questions[this.currentIndexV2];
    }
    goToPreviousQuestionV2() : void {
        if (this.tmp > 0) {
            this.tmp--;
            this.currentIndexV2 = this.randomIndexArray[this.tmp];
        }
    }
    goToNextQuestionV2() : void {
        if (this.tmp < this.randomIndexArray.length - 1) {
            this.tmp++;
            this.currentIndexV2 = this.randomIndexArray[this.tmp];
        }
    }


}