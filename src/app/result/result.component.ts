import { Component } from '@angular/core';
import { ProgressModel, ResultService } from '../services/result.service';

@Component({
  selector: 'ne4-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  // progress: ProgressModel = new ProgressModel();

  constructor(public resultService: ResultService) { }

  isCheck = this.resultService.isThisChekModus;
  isExam = this.resultService.isThisExamModus;

  ngOnInit(): void {

  }

  resetProgress() : void {
    this.resultService.resetProgress();
  }

  saveResult(student: string) {
    const currDate = new Date();
    const date = currDate.toLocaleDateString();
    const time = currDate.toLocaleTimeString();
    const fileName = `${student}_${date}_result.json`;

    const progressWithDate = { ...this.resultService.getProgress(), date, time}
    const fileContent = JSON.stringify(progressWithDate, null, 2);
    const blob = new Blob([fileContent], {type: 'application/json'});
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();

    window.URL.revokeObjectURL(url);
  }


}
