import { Http } from '@angular/http';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Config } from '../../../../../../config';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-create-semistructure-questions',
  templateUrl: './create-semistructure-questions.component.html',
  styleUrls: ['./create-semistructure-questions.component.css']
})
export class CreateSemistructureQuestionsComponent implements OnInit {
    public formG: FormGroup;
    public formArray: FormArray;

    constructor(private fb: FormBuilder, private http: Http, public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
      this.createForm(); 
    }


    createForm() {
      this.formArray = this.fb.array([
        this.fb.control(''),
      ]);
      this.formG = this.fb.group({
        projectTitle: this.fb.control(''),
        questions: this.formArray,
        sub_type_id: 2,
        type_id: 1,
      });
    }

    addQuestion() {
      this.formArray.push(this.fb.control(''));
    }

    removeQuestion(i) {
      this.formArray.removeAt(i);
    }
    postQuestions() {
      this.http.post(`${Config.apiUrl}project`, this.formG.value, Config.authCredentials)
      .map(result => result.json())
      .subscribe(
        result => this.toastr.success('RESULTS', result.message),
        error => this.toastr.error(error._body, error.status),
      );
    }
}
