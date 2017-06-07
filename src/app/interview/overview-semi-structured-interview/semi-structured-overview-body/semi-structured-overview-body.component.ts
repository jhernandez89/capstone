import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semi-structured-overview-body',
  templateUrl: './semi-structured-overview-body.component.html',
  styleUrls: ['./semi-structured-overview-body.component.css']
})
export class SemiStructuredOverviewBodyComponent implements OnInit {
  unstructured = false;
  semistructured = true;
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
