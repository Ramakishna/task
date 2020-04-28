import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:4500';
  url1 = 'http:sdeveloper.github.com/v3/search/';
  reg: User;
  constructor(private htc: HttpClient) { }
  getEmp(): Observable<any> {
    return this.htc.get(this.url + '/' + 'getUsers', {responseType: 'json'});
  }
  getEmp1(): Observable<any> {
    return this.htc.get(this.url1, {responseType: 'json'});
  }
  register(reg: User): Observable<any> {
    console.log(reg, 'dataaa');
    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json' })
    };
    return this.htc.post(this.url + '/' + 'register', JSON.stringify(reg), httpOptions);
  }

}
