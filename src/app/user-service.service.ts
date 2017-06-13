import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { merge } from 'ramda';
export interface userState {
  interviewType: string;
  semiStructuredTabs: string;
  lowerNavType: string;
  tip: boolean;
  user?: User;
}
export interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

@Injectable()
export class UserServiceService {
  private userState: BehaviorSubject<userState>;
  constructor(private http: Http) {
    this.userState = new BehaviorSubject({
      interviewType: 'unstructured',
      semiStructuredTabs: 'create',
      lowerNavType: 'profile',
      tip: true,
    });
  }

  get observable() {
    return this.userState.asObservable();
  }
  createUser(servers: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/username', servers, { headers: headers })
      .map(body => body.json())
      .subscribe(body => {
        const state = this.userState.getValue();
        const updatedState = merge(state, {
          tip: body.tip,
          user: {
            firstName: body.first_name,
            lastName: body.last_name,
            username: body.username,
            email: body.email,
          }
        });
        this.userState.next(updatedState);
        console.log(this.userState.getValue());
      });
  }
  onLogin(objectWithCredentials) {
    this.http.post('http://localhost:3000/username/login', objectWithCredentials).map(res => res.json())
    .subscribe(body => {
      console.log(body);
      const state = this.userState.getValue();
      const updatedState = merge(state, {
        tip: body.tip,
        user: {
          firstName: body.first_name,
          lastName: body.last_name,
          username: body.username,
          email: body.email,
        }
      });
      this.userState.next(updatedState);
      console.log(this.userState.getValue());
    });
  }
  setInterviewTypes(type) {
    const state = this.userState.getValue();
    this.userState.next(merge(state, { interviewType: type }));
  }
  setSemiStructuredTabs(type) {
    const state = this.userState.getValue();
    this.userState.next(merge(state, { semiStructuredTabs: type }))
  }
  setNavbarType(type) {
    console.log(type);
    const state = this.userState.getValue();
    this.userState.next(merge(state, { lowerNavType: type }));
  }
}
