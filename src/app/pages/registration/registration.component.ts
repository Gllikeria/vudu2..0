import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from './form-validators';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  languages: string[] = ['English', 'Georgian', 'German', 'Spanish', 'Russian'];
  contactForm: any;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required]],
        email: [
          '',
          [Validators.required, Validators.pattern(this.emailPattern)],
        ],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
        dateOfBirth: ['', Validators.required],
        gender: ['', [Validators.required]],
        language: ['', [Validators.required]],
        zip: ['', [Validators.required]],
        about: ['', [Validators.required]],
      },
      { validator: passwordValidator }
    );
  }

  homeComponent(e: any) {
    this.router.navigate(['home']);
  }
  get firstname() {
    return this.contactForm.get('firstname');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get password() {
    return this.contactForm.get('password');
  }
  get confirmPassword() {
    return this.contactForm.get('confirmPassword');
  }
  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }
  get dateofBirth() {
    return this.contactForm.get('dateOfBirth');
  }
  get gender() {
    return this.contactForm.get('gender');
  }
  get language() {
    return this.contactForm.get('language');
  }
  get zip() {
    return this.contactForm.get('zip');
  }
  get about() {
    return this.contactForm.get('about');
  }
  onSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
