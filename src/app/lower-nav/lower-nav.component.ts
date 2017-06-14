import { Router } from '@angular/router';
import { UserServiceService, userState } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-nav',
  templateUrl: './lower-nav.component.html',
  styleUrls: ['./lower-nav.component.css']
})
export class LowerNavComponent implements OnInit {
  currentState = 'home';
  userState = {interviewType: 'unstructured', semiStructuredTabs: 'overview'}
  constructor(private userStateService: UserServiceService, private router: Router) {
    this.userStateService.observable.subscribe(userService => {
      this.userState = userService;
    })
    this.router.events.subscribe(navRouter => {this.currentState = navRouter['url']});
  }

  ngOnInit() {
  }
  setInterviewType(type) {
    this.userStateService.setInterviewTypes(type)
  }
  semiStructureType(type) {
    this.userStateService.setSemiStructuredTabs(type)
  }
}
