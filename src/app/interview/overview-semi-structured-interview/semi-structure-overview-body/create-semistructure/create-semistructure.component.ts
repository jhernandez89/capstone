import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-semistructure',
  templateUrl: './create-semistructure.component.html',
  styleUrls: ['./create-semistructure.component.css']
})
export class CreateSemistructureComponent implements OnInit {
  confidentiality = true;
  biographicalInfo = false;
  constructor() { }

  ngOnInit() {
  }
  toggleConfidentiality() {
    this.confidentiality = true;
    this.biographicalInfo = false;
  }
  toggleBiographical() {
    this.biographicalInfo = true;
    this.confidentiality = false;
  }
}
