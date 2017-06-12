import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.css']
})
export class ProfileBodyComponent implements OnInit {
  allOrSome = false;
  currentAllOrSome = true;
  helloYo = "hello";
  yellowColor = "yellow"
  listTreeView = false;
  toggleCurrentProjects = false;
  narrative = false;
  phenomenology = false;
  ethnography = false;
  caseStudy = false
  groundedTheory = false;
  currentState = '/user'
  constructor() { }

  ngOnInit() {
  }
  pickProject() {
    this.allOrSome = true;
    this.listTreeView = true;
  }
  allProjects() {
    this.allOrSome = false;
    this.listTreeView = false;
  }
  pickCurrentProjects() {
    this.currentAllOrSome = true;
    this.toggleCurrentProjects = false;
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
  getStyle() {
    return "rgb(37.4%, 0.6%, 14.6%)";
  }
}
