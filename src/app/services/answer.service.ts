import { Injectable } from "@angular/core";
import { Question } from "../Question";
import { QuestionType } from "../enums";

@Injectable({
    providedIn: 'root'
})

export class AnswerService {
        
    // private userAnswer: string = '';
    // private selectedOption: string = '';
    // private selectedOptionS: string[] = [];
    

    constructor() { }

    checkAnswer(question: Question, selectedAnswer: string | string[]) : boolean {
        if (question.type === QuestionType.FillIn) {
            const expectedAnswer = question.answer as string;
            console.log((selectedAnswer as string) === expectedAnswer.trim().toLowerCase())
            return (selectedAnswer as string) === expectedAnswer.trim().toLowerCase();
        } else if (question.type === QuestionType.SingleChoice) {
            const expectedAnswer = question.answer as string;
            console.log(selectedAnswer as string === expectedAnswer)
            return selectedAnswer as string === expectedAnswer;
        } else if (question.type === QuestionType.MultipleChoice) {
            const expectedAnswer = question.answer as string[];
            if ((selectedAnswer as string[]).length !== expectedAnswer.length) {
                console.log(false)
                return false;
            }
            console.log(expectedAnswer.every(answer => (selectedAnswer as string[]).includes(answer)))
            return expectedAnswer.every(answer => (selectedAnswer as string[]).includes(answer));
        }
        return false;
    }

    // setUserAnswer(answer: string): void {
    //     this.userAnswer = answer;
    // }

    // setSelectedOption(option: string): void {
    //     this.selectedOption = option;
    // }

    // setSelectedOptions(optionS: string[]): void {
    //     this.selectedOptionS = optionS;
    // }


}


