import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [

    Validators.required,

    Validators.email

  ])

  password = new FormControl('', [

    Validators.required,

    Validators.minLength(6),

    RegisterComponent.hasExclamation

  ])


  gender = new FormControl('', [

    Validators.required,

  ])

  countries = new FormControl('')

  tnc = new FormControl('', [

    Validators.required,

  ])
  registerForm: FormGroup;



  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({

      username: this.username,

      password: this.password,

      gender: this.gender,

      countries: this.countries,

      tnc: this.tnc

    })

  }

  static hasExclamation(control: AbstractControl) {
    const hasExcl = control.value.indexOf("!") >= 0
    return hasExcl ? null : { hasExclamation: true }
  }

  onRegister() {
    console.log(this.registerForm);
  }

  onReset() {
    this.registerForm.reset();
  }

  ngOnInit(): void {
  }

}
