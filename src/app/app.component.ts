import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy!';

  
    questionInfo; 
  

  
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

 

 }
