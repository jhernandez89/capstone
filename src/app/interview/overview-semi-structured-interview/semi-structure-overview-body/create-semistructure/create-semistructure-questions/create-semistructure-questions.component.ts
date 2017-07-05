import { Http } from '@angular/http';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Config } from '../../../../../../config';
import { UserServiceService } from '../../../../../user-service.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-create-semistructure-questions',
  templateUrl: './create-semistructure-questions.component.html',
  styleUrls: ['./create-semistructure-questions.component.css']
})
export class CreateSemistructureQuestionsComponent implements OnInit {
  public formG: FormGroup;
  public formArray: FormArray;
  tips = [
    'Question 1: We recommend making your first question open-ended and comfortable for the participant to answer.  Easing your participant into your chosen topic in a comfortable manner can lead to comfortable conversation throughout the interview.',
    'Question 2: It might be a good idea to start with simpler questions and progress to more complex ones later in the interview'
  ]
  constructor(private fb: FormBuilder, private http: Http, public toastr: ToastsManager, vcr: ViewContainerRef, private userStateService: UserServiceService) {
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
      sub_type_id: 4,
      type_id: 2,
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
      result => this.toastr.success('RESULTS', result.message)
        .then(() =>
        this.userStateService.refreshProjects()
        ),
      error => this.toastr.error(error._body, error.status),
    )
  }
}
