import { UserServiceService } from './../../user-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userState;
  username = '';
  password = '';
  login = {
    email: 'bbobert89@gmail.com',
    password: 'IAmBobbert'
  }
  constructor(private userServiceService: UserServiceService) {
    this.userServiceService.observable.subscribe(userState => {
      this.userState = userState
    })
   }

  ngOnInit() {
  }
  logout() {
    this.userServiceService.onLogOut()
  }
}
