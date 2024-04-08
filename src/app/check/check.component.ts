import { Component } from '@angular/core';
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'ne4-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {

  constructor(private answerService: AnswerService) { }
  
}
