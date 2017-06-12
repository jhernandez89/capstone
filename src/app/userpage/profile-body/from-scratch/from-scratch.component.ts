import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-scratch',
  templateUrl: './from-scratch.component.html',
  styleUrls: ['./from-scratch.component.css']
})
export class FromScratchComponent implements OnInit {
  interview = false;
  ethnography = false;
  focusGroups = false;
  constructor() { }

  ngOnInit() {
  }
  toggleInterview() {
    if (this.interview) {
      this.interview = false;
    } else {
      this.interview = true;
    }
  }
  toggleEthnography() {
    if (this.ethnography) {
      this.ethnography = false;
    } else {
      this.ethnography = true;
    }
  }
  toggleFocusGroups() {
    if (this.focusGroups) {
      this.focusGroups = false; 
    } else {
      this.focusGroups = true;
    }
  }
}
