import { UserServiceService } from './../../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-types',
  templateUrl: './interview-types.component.html',
  styleUrls: ['./interview-types.component.css']
})
export class InterviewTypesComponent implements OnInit {
  userState = {interviewType: 'unstructured'}
  constructor(private userService: UserServiceService) {
    this.userService.observable.subscribe(userService => {
      this.userState = userService
    });
   }
  ngOnInit() {
  }

}
