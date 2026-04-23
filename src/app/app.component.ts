import { Component } from '@angular/core';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];
  selectedUser: User | null = null;

  handleUsersLoaded(users: User[]): void {
    this.users = users;
  }

  handleUserSaved(savedUser: User): void {
    const existingIndex = this.users.findIndex(user => user.id === savedUser.id);

    if (existingIndex > -1) {
      this.users[existingIndex] = savedUser;
      this.users = [...this.users];
    } else {
      this.users = [savedUser, ...this.users];
    }

    this.selectedUser = null;
  }

  handleEditUser(user: User): void {
    this.selectedUser = { ...user };
  }

  handleDeleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);

    if (this.selectedUser?.id === id) {
      this.selectedUser = null;
    }
  }

  clearSelectedUser(): void {
    this.selectedUser = null;
  }
}