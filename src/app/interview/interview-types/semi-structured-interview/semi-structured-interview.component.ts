import { UserServiceService } from './../../../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semi-structured-interview',
  templateUrl: './semi-structured-interview.component.html',
  styleUrls: ['./semi-structured-interview.component.css']
})
export class SemiStructuredInterviewComponent implements OnInit {
lowerNavState = {lowerNavType: 'profile'}
  constructor(private userStateService: UserServiceService) { }

  ngOnInit() {
  }
  setNavType(type) {
    this.userStateService.setNavbarType(type)
    console.log(type);
  }
}
