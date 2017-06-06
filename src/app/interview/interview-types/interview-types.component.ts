import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-types',
  templateUrl: './interview-types.component.html',
  styleUrls: ['./interview-types.component.css']
})
export class InterviewTypesComponent implements OnInit {
  unstructured = true;
  semistructured = false;
  structured = false;
  constructor() { }

  ngOnInit() {
  }
  changeToUnstructured() {
    this.unstructured = true;
    this.semistructured = false;
    this.structured = false;
  }
  changeToSemistructured() {
    this.unstructured = false;
    this.semistructured = true;
    this.structured = false;
  }
  changeToStructured() {
    this.unstructured = false;
    this.semistructured = false;
    this.structured = true;
  }

}
