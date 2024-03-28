import { QuestionType } from "./enums";

export interface Question {
    id: number;
    question: string;
    type: QuestionType;  // enum -> für alle  3 variante fragen
    options?: string[]; // für multi und single
    answer?: string | number | number[]; // für fill-in , single und multi
    status?: string;
}
