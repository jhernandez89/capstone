import { ServerService } from './server.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      first_name: 'Bob',
      last_name: 'Bobbert',
      email: 'bbobert89@gmail.com',
      tip: true,
      username: 'bbobbert',
      password: 'IAmBobbert'
    },
  ];
  constructor(private serverService: ServerService) {}
  // onAddServer(name: string) {
  //   this.servers.push({
  //     first_name: name,
  //   });
  // }
  onSave() {
    this.serverService.storeService(this.servers)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
