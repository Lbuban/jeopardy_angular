
// child 

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {

  ngOnInit() {
  }

  @Input()questionInfo; //from parent
  @Output() refreshAnswer = new EventEmitter<any>(); //to parent

  userAnswer: string;
  counter: number =0;
  getDataFromService;
  
  constructor(){}

// if the player answer equals the api answer, alert correct and add points to existing points
 onClickMe (){ 
 if (this.questionInfo.answer === this.userAnswer){
   alert("correct")
   this.counter += this.questionInfo.value
 } 

 
 this.refreshAnswer.emit(); //
 this.userAnswer='' //empty answer after submit

 }
}
