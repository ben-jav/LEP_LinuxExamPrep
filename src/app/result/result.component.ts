import { Component } from '@angular/core';
import { ProgressModel, ResultService } from '../services/result.service';
import { UsernameService } from '../services/username.service';

@Component({
  selector: 'ne4-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  // progress: ProgressModel = new ProgressModel();

  constructor(public resultService: ResultService,
              private usernameService: UsernameService) { }

  isCheck = this.resultService.isThisChekModus;
  isExam = this.resultService.isThisExamModus;

  username: string = '';

  ngOnInit(): void {
    this.username = this.usernameService.getUsername();
  }

  resetProgress() : void {
    this.resultService.resetProgress();
  }

  saveResult() {
    const currDate = new Date();
    const date = currDate.toLocaleDateString();
    const time = currDate.toLocaleTimeString();
    const fileName = `${this.username}_${date}_result.json`;
    const user: string = this.username;
  
    const progress = this.resultService.getProgress();
    const mode = this.isCheck ? 'Check-Modus' : (this.isExam ? 'Exam-Modus' : 'Unbekannt');
  
    const progressWithDateAndMode = {
      ...progress,
      date,
      time,
      mode, // add mode check or exam
      user
    };
  
    const fileContent = JSON.stringify(progressWithDateAndMode, null, 2);
    const blob = new Blob([fileContent], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  
    window.URL.revokeObjectURL(url);
  }

}
