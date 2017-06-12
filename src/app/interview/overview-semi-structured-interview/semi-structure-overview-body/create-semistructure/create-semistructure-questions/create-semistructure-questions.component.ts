import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-semistructure-questions',
  templateUrl: './create-semistructure-questions.component.html',
  styleUrls: ['./create-semistructure-questions.component.css']
})
export class CreateSemistructureQuestionsComponent implements OnInit {
  questionOne = false;
  questionTwo = false;
  questionThree = false;
  questionFour = false;
  questionFive = false;
  questionSix = false;
  questionSeven = false;
  questionEight = false;
  questionNine = false;
  questionTen = false;

  
  constructor() { }

  ngOnInit() {
  }
  toggleQuestionOne() {
    if (this.questionOne) {
      this.questionOne = false;
    } else {
      this.questionOne = true;
    }
  }
}
