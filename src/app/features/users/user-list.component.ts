import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() usersLoaded = new EventEmitter<User[]>();
  @Output() editUser = new EventEmitter<User>();
  @Output() userDeleted = new EventEmitter<number>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      this.usersLoaded.emit(data);
    });
  }

  onEdit(user: User): void {
    this.editUser.emit(user);
  }

  deleteUser(id: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this user?');

    if (!confirmed) {
      return;
    }

    this.userService.deleteUser(id).subscribe(() => {
      this.userDeleted.emit(id);
    });
  }
}