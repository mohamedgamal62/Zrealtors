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
  styleUrls: ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent {
  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
    mobile: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^[0-9]+$/),
      ],
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
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/),
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

  signUp() {
    const mobileValue = this.form.controls.mobile.value;
    const userExists = this.usersService
      .allUsers()
      .find((user) => user.number == mobileValue);

    if (userExists) {
      this.already = true;
      this.invalid = false;
      this.visible = false;
      return;
    }

    if (this.form.valid) {
      this.usersService.addUser(
        this.form.controls.name.value,
        mobileValue,
        this.form.controls.email.value,
        this.form.get('passwords')?.get('create')?.value
      );
      this.visible = true;
      this.invalid = false;
      this.already = false;
    } else {
      this.invalid = true;
      this.already = false;
      this.visible = false;
    }
  }

  handleClose() {
    this.router.navigate(['/']);
  }
  invaildName = true;
}
