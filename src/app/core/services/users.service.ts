import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  activePage: number;
  users: User[] = [];

  constructor(private http: HttpClient) {}

  getUsers(pageNumber: number) {
    return this.http.get('https://reqres.in/api/users', {
      params: {
        page: pageNumber,
      },
    });
  }
  getUserById(userId: number) {
    return this.http.get(`https://reqres.in/api/users/${userId}`);
  }

  deleteUser(userId: number) {
    this.users.filter((user) => user.id !== userId);
    return this.http.delete(`https://reqres.in/api/users/${userId}`);
  }

  updateUser(
    userId: number,
    updatedUser: {
      first_name?: string;
      last_name?: string;
      email?: string;
    }
  ) {
    return this.http.put(`https://reqres.in/api/users/${userId}`, updatedUser);
  }

  // export interface User {
  //   avatar: string;
  //   email: string;
  //   first_name: string;
  //   id: number;
  //   last_name: string;
  // }
}
