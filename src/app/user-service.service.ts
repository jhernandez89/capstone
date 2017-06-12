import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { merge } from 'ramda';
export interface userState {
  interviewType: string;
  semiStructuredTabs: string;
  lowerNavType: string;
}

@Injectable()
export class UserServiceService {
  private userState: BehaviorSubject<userState>
  constructor(private http: Http) {
    this.userState = new BehaviorSubject({
      interviewType: 'unstructured',
      semiStructuredTabs: 'create',
      lowerNavType: 'profile',
    });
   }
  get observable() {
    return this.userState.asObservable()
  }
  setInterviewTypes (type) {
    const state = this.userState.getValue();
    this.userState.next(merge(state, {interviewType: type }));
  }
  setSemiStructuredTabs(type) {
    const state = this.userState.getValue();
    this.userState.next(merge(state, {semiStructuredTabs: type}))
  }
  setNavbarType (type) {
    console.log(type);
    const state = this.userState.getValue();
    this.userState.next(merge(state, {lowerNavType: type }));
  }
  login(objectWithCredentials) {
    this.http.post('some url', objectWithCredentials).map(res => res.json()).subscribe(result => {
      const state = this.userState.getValue();
      this.userState.next(merge(state, { name: result.name }));
    })
  }
}
