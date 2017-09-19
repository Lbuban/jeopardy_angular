import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; //need this for input field
import { JeopardyService } from './jeopardy.service'; // need for jeopard API

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy!';
  
  questionInfo; // variable
  
  constructor(private jeopardyService: JeopardyService){}

getDataFromService(){
  this.jeopardyService.getQuestionInfo() //api question
    .subscribe ( //once the map (success) method runs, then do this.
      questionInfo => {
        this.questionInfo = questionInfo[0]; // grab question from array
      } 
    )
 }

 ngOnInit(){
   this.getDataFromService() //calling it so that our data loads as soon as the page loads.
 }

 

 }
