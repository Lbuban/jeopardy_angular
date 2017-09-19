
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

  @Input()questionInfo; //In order to use questionInfo below, we need to link it from parent (add Input to import statement above) 
  @Output()refreshAnswer = new EventEmitter<void>(); //Tell the parent to provide a new question (add OutPut and EventEmitter to import statement above) and add emit event below.

  userAnswer: string;
  counter: number =0;
 
  
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
