import { Component, OnInit } from '@angular/core';
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
   this.getDataFromService()
 }
}
