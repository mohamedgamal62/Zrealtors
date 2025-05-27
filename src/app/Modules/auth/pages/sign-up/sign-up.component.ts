import { UsersService } from '../../services/users.service';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
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
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
    TranslateModule,
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
  constructor(private fb: FormBuilder, private translate: TranslateService) {}
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
      this.translate
        .get('signup.messages.mobile_already_registered')
        .subscribe((res: string) => {
          this.showErrorInToaster(res);
        });
      return;
    }
    if (this.form.valid) {
      this.registerUser();
      this.visible = true;
    } else {
      this.translate
        .get('signup.messages.invalid_form')
        .subscribe((res: string) => {
          this.showErrorInToaster(res);
        });
    }
  }
  goToHomePage() {
    this.router.navigate(['/']);
  }
  showErrorInToaster(errorMessage: string) {
    this.messageService.add({
      severity: 'error',
      summary: this.translate.instant('signup.messages.error'),
      detail: errorMessage,
      life: 3000,
    });
  }

}
