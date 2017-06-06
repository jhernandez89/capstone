import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  allOrSome = false;
  constructor() { }

  ngOnInit() {
  }
  pickProject() {
    console.log('helllllllo');
    this.allOrSome = true;
  }
}
