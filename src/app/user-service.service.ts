import { Config } from './../config';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { merge, omit } from 'ramda';

export interface userState {
  interviewType: string;
  semiStructuredTabs: string;
  lowerNavType: string;
  tip: boolean;
  projects: Project[];
  user?: User;
}
export interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}
export interface Project {
  id: number;
  name: string;
  type: string;
  interview_type: string;
  questions?: Question[];
}
export interface Question {
  question: string;
  project_id: number;
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
      projects: [],
    });
    this.checkAuth();
  }

  get observable() {
    return this.userState.asObservable();
  }
  createUser(servers: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${Config.apiUrl}username`, servers, Config.authCredentials)
      .map(body => body.json())
      .subscribe(this.assignUser.bind(this));
  }
  checkAuth() {
    this.http.get(`${Config.apiUrl}username/checkAuth`, Config.authCredentials).map(res => res.json())
      .subscribe(this.assignUser.bind(this), () => undefined);
  }

  private assignUser(body) {
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
    this.refreshProjects()

  }
  onLogOut() {
    this.http.get(`${Config.apiUrl}username/logout`, Config.authCredentials).map(res => res.json())
      .subscribe(() => {
        const state = this.userState.getValue();
        const updatedState = omit(['user'], merge(state, {
          tip: true,
          projects: [],
        }));
        this.userState.next(updatedState);
      })
  }
  onLogin(objectWithCredentials) {
    this.http.post(`${Config.apiUrl}username/login`, objectWithCredentials, Config.authCredentials).map(res => res.json())
      .subscribe(this.assignUser.bind(this));
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
    const state = this.userState.getValue();
    this.userState.next(merge(state, { lowerNavType: type }));
  }
  refreshProjects() {
    this.http.get(`${Config.apiUrl}project`, Config.authCredentials).map(res => res.json())
      .subscribe(projects => {
        const state = this.userState.getValue();
        const updatedState = merge(state, { projects });
        this.userState.next(updatedState);
      })
  }
}
