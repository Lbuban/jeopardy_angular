import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {

  ngOnInit() {
  }

  @Input()questionInfo;
  @Output() refreshAnswer = new EventEmitter<any>();

  userAnswer: string;
  counter: number =0;
  getDataFromService;
  
  constructor(){}

 onClickMe (){
 if (this.questionInfo.answer === this.userAnswer){
   alert("correct")
   this.counter += this.questionInfo.value
 } 

 
 this.refreshAnswer.emit();
 this.userAnswer=''

 }
}
