import { UserServiceService } from './../../../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semi-structured-overview-body',
  templateUrl: './semi-structured-overview-body.component.html',
  styleUrls: ['./semi-structured-overview-body.component.css']
})
export class SemiStructuredOverviewBodyComponent implements OnInit {
  tabState = {semiStructuredTabs: 'create'}
  constructor(private userService: UserServiceService) {
    this.userService.observable.subscribe(userService => {
      this.tabState = userService;
    })
   }

  ngOnInit() {
  }
}
