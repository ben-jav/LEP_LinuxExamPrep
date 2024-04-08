import { Injectable } from "@angular/core";
import { Question } from "../Question";

@Injectable({
    providedIn: 'root'
})

export class AnswerService {
    private progress: ProgressModel = new ProgressModel();

    constructor() { }

    checkAnswer(question: Question, selectedAnswer: string) {

    }

    startCheckModus() : void {

    }

    startExamModus() : void {
        
    }

    getProgress() : ProgressModel {
        return this.progress;
    }
}


export class ProgressModel {
    correctAnswers: number = 0;
    incorrectAnswers: number = 0;
}


// export class FeedbackModel {
//     feedbackText: string = '';
//     iscorrect: boolean = false;
// }