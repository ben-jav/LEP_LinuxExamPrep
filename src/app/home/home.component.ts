import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { DataService } from '../services/data.service'; 

@Component({
  selector: 'ne4-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  zuLPICsiteLeiten() : void {
    window.location.href = "https://www.lpi.org/";
  }
}
