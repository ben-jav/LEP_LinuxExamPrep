import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { CheckComponent } from './check/check.component';
import { ExamComponent } from './exam/exam.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultComponent } from './result/result.component';
import { Exam2Component } from './exam2/exam2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: NavbarComponent, outlet: 'navbar' },
  { path: 'learn', component: LearnComponent },
  { path: 'check', component: CheckComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'exam2', component: Exam2Component },
  { path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
