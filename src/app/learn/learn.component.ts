import { Component, OnInit } from '@angular/core';
import { mockQuestions } from '../mockData';
import { QuestionType } from '../enums';

@Component({
  selector: 'ne4-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  questions = mockQuestions;
  questionType = QuestionType;

  constructor() { }

  ngOnInt() : void {

  }
}
