import { UsersService } from '../../services/users.service';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PasswordModule,
    RouterModule,
    ButtonModule,
    Dialog,
  ],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
  notFound: boolean = false;
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
      this.notFound = true;
    }
  }
}
