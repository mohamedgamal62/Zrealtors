import { UsersService } from '../../services/users.service';
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
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
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
    Toast,
  ],
  templateUrl: './sign-up.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
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
  visible: boolean = false;

  invaildName = true;
  router = inject(Router);
  messageService = inject(MessageService);
  private isMobileRegistered(mobile: string | null) {
    return this.usersService.allUsers().some((user) => user.number === mobile);
  }
  private registerUser() {
    const mobileValue = this.form.controls.mobile.value;
    this.usersService.addUser(
      this.form.controls.name.value,
      mobileValue,
      this.form.controls.email.value,
      this.form.get('passwords')?.get('create')?.value
    );
  }
  signUp() {
    const mobileValue = this.form.controls.mobile.value;
    if (this.isMobileRegistered(mobileValue)) {
      this.showErrorInToaster('You already have an account with this number');
      return;
    }
    if (this.form.valid) {
      this.registerUser();
      this.visible = true;
    } else {
      this.showErrorInToaster('Invalid form , Please check your input data');
    }
  }
  GoToHomePage() {
    this.router.navigate(['/']);
  }
  showErrorInToaster(errorMassege: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMassege,
      life: 3000,
    });
  }
}
('  Invalid form , Please check your input data');
