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

  questionInfo;
  userAnswer: string; //store the player answer
  counter: number =0; // start player score at 0
  
  constructor(private jeopardyService: JeopardyService){}

getDataFromService(){ 
  this.jeopardyService.getQuestionInfo()
    .subscribe ( //once the map (success) method runs, then do this.
      questionInfo => {
        this.questionInfo = questionInfo[0];
      }
    )
 }

 ngOnInit(){
   this.getDataFromService() //calling it so that our data loads as soon as the page loads.
 }

 onClickMe (){
 if (this.questionInfo.answer === this.userAnswer){ // compares user answer to api answer
   alert("correct") // alert message if answers match
   this.counter += this.questionInfo.value // adds question value to current score
 } 
this.getDataFromService() //loads new question

// this.userAnswer.val(" ");

console.log(this.questionInfo.answer) // log answer

 }
 
}
