import { UserServiceService } from './../../../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent implements OnInit {
  userState;
  constructor(private userServiceService: UserServiceService) { 
    this.userServiceService.observable.subscribe(userState => {
      this.userState = userState;
    })
  }

  ngOnInit() {
  }

}
