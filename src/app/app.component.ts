import { UserServiceService } from './user-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login=
  {
    email: 'bbobert89@gmail.com',
    password: 'IAmBobbert'
  }
  servers=
    {
      first_name: 'Bob',
      last_name: 'Bobbert',
      email: 'bbobert89@gmail.com',
      tip: true,
      username: 'bbobbert',
      password: 'IAmBobbert'
    }
  constructor(private userServiceService: UserServiceService) {}
  // onAddServer(name: string) {
  //   this.servers.push({
  //     first_name: name,
  //   });
  // }
  onSave() {
    this.userServiceService.createUser(this.servers)
  }
   onLogin() {
    this.userServiceService.onLogin(this.login)
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
