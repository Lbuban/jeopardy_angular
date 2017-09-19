import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {

  ngOnInit() {
  }

  @Input()questionInfo;

  userAnswer: string;
  counter: number =0;
  getDataFromService;
  
  constructor(){}

 onClickMe (){
 if (this.questionInfo.answer === this.userAnswer){
   alert("correct")
   this.counter += this.questionInfo.value
 } 

 this.getDataFromService()

 }
}
