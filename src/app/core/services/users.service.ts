import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
  getUserById(id: number) {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
