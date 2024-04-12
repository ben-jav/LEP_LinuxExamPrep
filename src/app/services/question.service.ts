import { Injectable } from "@angular/core";
import { mockQuestions } from "../mockData";
import { Question } from "../Question";

@Injectable({
    providedIn: 'root'
})

export class QuestionService {
    private questions : Question[] = mockQuestions;
    private currentIndex: number = 0;

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


}