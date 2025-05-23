import { UsersService } from '../../services/users.service';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PasswordModule,
    RouterModule,
    ButtonModule,
    Dialog,
    Toast,
  ],
  templateUrl: './sign-in.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class SignInComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required],
    }),
    Password: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  usersService = inject(UsersService);
  visible: boolean = false;
  router = inject(Router);
  logIn() {
    if (
      this.form.valid &&
      this.usersService.allUsers().find((user) => {
        return (
          user.email == this.form.controls.email.value &&
          user.password == this.form.controls.Password.value
        );
      })
    ) {
      this.visible = true;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000);
    } else {
      this.invalidForm();
    }
  }
  constructor(private messageService: MessageService) {}

  invalidForm() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: ' Please check your email and password and try again.',
      life: 3000,
    });
  }
}
