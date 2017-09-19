import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; //for the input form

import { AppComponent } from './app.component';
import { JeopardyService } from './jeopardy.service'; 
import { LogicComponent } from './logic/logic.component'; //2nd component added 

@NgModule({
  declarations: [
    AppComponent,
    LogicComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
