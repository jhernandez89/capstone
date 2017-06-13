import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-semistructure-questions',
  templateUrl: './create-semistructure-questions.component.html',
  styleUrls: ['./create-semistructure-questions.component.css']
})
export class CreateSemistructureQuestionsComponent implements OnInit {
  formArray: FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  };
  createForm() {
    this.formArray = this.fb.array([this.fb.control(1), this.fb.control(2), this.fb.control(3), this.fb.control(4), this.fb.control(5),]);
  };
  addQuestion() {
    this.formArray.push(this.fb.control(''));
  };
  removeQuestion(i) {
    console.log(i);
    this.formArray.removeAt(i);
    this.formArray.updateValueAndValidity()
    console.log(this.formArray.controls.map(control => control.value));
  };
}
