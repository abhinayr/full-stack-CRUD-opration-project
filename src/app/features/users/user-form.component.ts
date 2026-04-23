import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnChanges {
  @Input() selectedUser: User | null = null;
  @Output() userSaved = new EventEmitter<User>();
  @Output() cancelEdit = new EventEmitter<void>();

  user: User = this.createEmptyUser();
  isEditMode = false;
  isSaving = false;

  constructor(private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser']) {
      if (this.selectedUser) {
        this.user = { ...this.selectedUser };
        this.isEditMode = true;
      } else {
        this.resetForm();
      }
    }
  }

  saveUser(): void {
    if (this.isSaving) {
      return;
    }

    this.isSaving = true;

    if (this.isEditMode && this.user.id) {
      this.userService.updateUser(this.user.id, this.user).subscribe({
        next: (updatedUser: User) => {
          this.userSaved.emit(updatedUser);
          this.resetForm();
          this.isSaving = false;
        },
        error: () => {
          this.isSaving = false;
          alert('Unable to update user. Please try again.');
        }
      });
      return;
    }

    this.userService.createUser(this.user).subscribe({
      next: (savedUser: User) => {
        this.userSaved.emit(savedUser);
        this.resetForm();
        this.isSaving = false;
      },
      error: () => {
        this.isSaving = false;
        alert('Unable to save user. Please try again.');
      }
    });
  }

  clearForm(): void {
    this.resetForm();
    this.cancelEdit.emit();
  }

  private resetForm(): void {
    this.user = this.createEmptyUser();
    this.isEditMode = false;
    this.isSaving = false;
  }

  private createEmptyUser(): User {
    return {
      firstName: '',
      lastName: '',
      email: '',
      note: ''
    };
  }
}