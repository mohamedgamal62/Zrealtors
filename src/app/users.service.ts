import { afterNextRender, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private Users = signal([
    {
      Name: 'mohamed gamal',
      number: '01102060605',
      email: 'm.gamal.saleh',
      password: '123456',
    },
  ]);
  allUsers = this.Users.asReadonly();
  constructor() {
    afterNextRender(() => {
      const users = localStorage.getItem('users');
      if (users) {
        this.Users.set(JSON.parse(users));
      }
    });
  }
  addUser(Name: any, num: any, email: any, password: any) {
    this.Users.update((prevusers) => [
      {
        Name: Name,
        number: num,
        email: email,
        password: password,
      },
      ...prevusers,
    ]);
    this.saveTasks();
  }
  private saveTasks() {
    localStorage.setItem('users', JSON.stringify(this.Users()));
  }
}
