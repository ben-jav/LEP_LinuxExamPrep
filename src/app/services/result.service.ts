import { Injectable } from "@angular/core";
import { Question } from "../Question";

@Injectable({
    providedIn: 'root'
})

export class ResultService {
    private progress: ProgressModel = new ProgressModel();
    public questionAnswers: Map<number, string | string[]> = new Map<number, string | string[]>;
    
    public isThisChekModus: boolean = false;
    public isThisExamModus: boolean = false;

    // username: string = '';

    // setUsername(username: string) {
    //     this.username = username;
    // }
    // getUsername(): string {
    //     return this.username;
    // }
    // generateFileName(): string {
    //     const currDate = new Date();
    //     const date = currDate.toLocaleDateString().replace(/\//g, '-'); //  '-' statt '/'
    //     const time = currDate.toLocaleTimeString().replace(/:/g, ''); // läsche ':'
    //     return `${this.username}_${date}_${time}_result.json`;
    //   }

    startCheckModus() : void {
        this.isThisExamModus = false;
        this.isThisChekModus = true;
    }

    startExamModus() : void {
        this.isThisChekModus = false;
        this.isThisExamModus = true;
    }

    setProgress(corr: number, incorr: number, na: number) : void {
        this.progress.correctAnswers += corr;
        this.progress.wrongAnswers += incorr;
        this.progress.notAnswered += na;
        console.log(`corr: ${this.progress.correctAnswers} - wrng: ${this.progress.wrongAnswers} - not: ${this.progress.notAnswered}`)
    }
    getProgress() : ProgressModel {
        return this.progress;
    }
    resetProgress() : void {
        this.progress = new ProgressModel();
        this.questionAnswers.clear();
    }

    setAnswerForQuestion(questionId: number, answer: string | string[]): void {
        this.questionAnswers.set(questionId, answer);
    }

    getAnswerForQuestion(questionId: number): string | string[] | undefined {
        return this.questionAnswers.get(questionId);
    }
}

export class ProgressModel {
    correctAnswers: number = 0;
    wrongAnswers: number = 0;
    notAnswered: number = 0;
}


// export class FeedbackModel {
//     feedbackText: string = '';
//     iscorrect: boolean = false;
// }