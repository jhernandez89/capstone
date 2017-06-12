import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeService(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.post('http://localhost:3000/username/', servers, {headers: headers});
    }
}