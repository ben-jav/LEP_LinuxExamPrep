import { QuestionType } from "./enums";

export interface Question {
    id: number;
    question: string;
    type: QuestionType;  // enum -> für alle  3 variante fragen
    options?: [string, boolean][]; // für multi und single
    answer?: string | string[]; // für fill-in/single und multi
    status?: string;
}
