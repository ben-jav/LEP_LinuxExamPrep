import { Component } from '@angular/core';
// import { ResultService } from './services/result.service';
import { UsernameService } from './services/username.service';

@Component({
  selector: 'ne4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LEP_LinuxExamPrep';

  inputUsername: string = '';
  username: string = '';


  // constructor(private resultService: ResultService) {}

  // submitUsername() {
  //   if(this.username.trim() !== '') {
  //     this.resultService.setUsername(this.username);
  //   }
  // }

  constructor(private usernameService : UsernameService) {}

  setUserName(username: string) {
    this.usernameService.setUsername(username);
    this.username = this.usernameService.getUsername();
    console.log('gespeicherte Username: ', this.username)
  }



}
