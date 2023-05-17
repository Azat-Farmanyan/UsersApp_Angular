import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  activePage: number;
  constructor(private http: HttpClient) {}

  getUsers(pageNumber: number) {
    return this.http.get('https://reqres.in/api/users', {
      params: {
        page: pageNumber,
      },
    });
  }
  getUserById(id: number) {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
