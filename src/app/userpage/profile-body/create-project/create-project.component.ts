import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  currentAllOrSome = true;
  toggleCurrentProjects = false;
  narrative = false;
  phenomenology = false;
  ethnography = false;
  caseStudy = false
  groundedTheory = false;

  constructor() { }

  ngOnInit() {
  }
  allCurrentProjects() {
    this.currentAllOrSome = false;
    this.toggleCurrentProjects = true;
  }
  toggleNarrative() {
    if (this.narrative) {
      this.narrative = false;
    } else {
      this.narrative = true;
    }
  }
  togglePhenomenology() {
    if (this.phenomenology) {
      this.phenomenology = false;
    } else {
      this.phenomenology = true;
    }
  }
  toggleEthnography() {
    if (this.ethnography) {
      this.ethnography = false;
    } else {
      this.ethnography = true;
    }
  }
  toggleGroundedTheory() {
    if (this.groundedTheory) {
      this.groundedTheory = false;
    } else {
      this.groundedTheory = true;
    }
  }
  toggleCaseStudy() {
    if (this.caseStudy) {
      this.caseStudy = false;
    } else {
      this.caseStudy = true;
    }
  }
}
