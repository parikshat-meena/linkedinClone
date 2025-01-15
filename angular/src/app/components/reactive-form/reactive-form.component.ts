import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  MinValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  // myForm = new FormGroup({
  //   fname: new FormControl('vaishnavi', [
  //     Validators.required,
  //     Validators.minLength(3),
  //   ]),
  //   email: new FormControl('', [Validators.email, Validators.required]),
  // });

  // creating reactive form with form builder class

  myForm: FormGroup;

  constructor(
    private builderObj: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.myForm = this.builderObj.group({
      fname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email, Validators.required]],
      mobileNo: ['', [Validators.pattern('[0-9]{10}')]],
    });
  }

  OnSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value, 'value of reactive form ');
      this.loginService.login();
      this.router.navigate(['/user']);
    } else {
      console.log(this.myForm, 'error from forms ');
    }
  }
}
