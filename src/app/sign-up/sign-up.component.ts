import { UsersService } from './../users.service';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
function checkPasswords(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    let val1 = control.get(controlName1)?.value;
    let val2 = control.get(controlName2)?.value;
    if (val1 === val2) {
      return null;
    }
    return { check: true };
  };
}
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
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent {
  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
    mobile: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.minLength(12),
      ],
    }),
    passwords: new FormGroup(
      {
        create: new FormControl('', {
          validators: [
            Validators.required,
            Validators.maxLength(40),
            Validators.minLength(8),
          ],
        }),
        confirm: new FormControl('', {
          validators: [
            Validators.required,
            Validators.maxLength(40),
            Validators.minLength(8),
          ],
        }),
      },
      {
        validators: [checkPasswords('create', 'confirm')],
      }
    ),
  });
  usersService = inject(UsersService);
  invalid: boolean = false;
  visible: boolean = false;
  already: boolean = false;
  router = inject(Router);
  Done() {
    if (
      this.form.valid &&
      this.usersService.allUsers().find((user) => {
        return user.number != this.form.controls.mobile.value;
      })
    ) {
      this.usersService.addUser(
        this.form.controls.name.value,
        this.form.controls.mobile.value,
        this.form.controls.email.value,
        this.form.get('passwords')?.get('create')?.value
      );
      this.visible = true;
    }
    if (
      this.usersService.allUsers().find((user) => {
        return user.number == this.form.controls.mobile.value;
      })
    ) {
      this.already = true;
    } else {
      this.invalid = true;
    }
  }
  handleClose() {
    this.router.navigate(['']);
  }
}
