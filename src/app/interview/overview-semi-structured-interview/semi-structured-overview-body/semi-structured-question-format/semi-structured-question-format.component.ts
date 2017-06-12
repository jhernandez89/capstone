import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semi-structured-question-format',
  templateUrl: './semi-structured-question-format.component.html',
  styleUrls: ['./semi-structured-question-format.component.css']
})
export class SemiStructuredQuestionFormatComponent implements OnInit {
  formatting = true;
  passiveListening = false;
  creatingQuestions = false;
  constructor() { }

  ngOnInit() {
  }
  toggleFormatting() {
    this.formatting = true;
    this.passiveListening = false;
    this.creatingQuestions = false;
  }
  togglePassiveListening() {
    this.passiveListening = true;
    this.formatting = false;
    this.creatingQuestions = false;
  }
  toggleQuestions() {
    this.creatingQuestions = true;
    this.passiveListening = false;
    this.formatting = false;

  }
}
