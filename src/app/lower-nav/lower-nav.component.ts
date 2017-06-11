import { Router } from '@angular/router';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-nav',
  templateUrl: './lower-nav.component.html',
  styleUrls: ['./lower-nav.component.css']
})
export class LowerNavComponent implements OnInit {
  currentState = 'home';
  constructor(private userStateService: UserServiceService, private router: Router) {
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
