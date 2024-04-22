import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { DataService } from '../services/data.service'; 
import { UsernameService } from '../services/username.service';

@Component({
  selector: 'ne4-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';

  constructor(usernameService: UsernameService) {
    this.username = usernameService.getUsername();
  }

  

  zuLPICsiteLeiten() : void {
    window.location.href = "https://www.lpi.org/";
  }
}
