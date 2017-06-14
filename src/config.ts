import { Headers, RequestOptions } from '@angular/http';

export class Config {
  static get apiUrl() {
    if (window.location.hostname === 'localhost') {
      return `${window.location.protocol}//localhost:3000/`;
    }
    return `https://arcane-crag-22252.herokuapp.com/`;
  };
  static get authCredentials() {
    const jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: jsonHeaders, withCredentials: true });
  }
}
