import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { CheckComponent } from './check/check.component';
import { ExamComponent } from './exam/exam.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnComponent,
    CheckComponent,
    ExamComponent,
    NavbarComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
