import {
  Component, OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstLogin: FormGroup;
  secondLogin: FormGroup;
  isPassword = true;


  constructor(fb: FormBuilder, private router: Router) {
    this.firstLogin = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
    this.secondLogin = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
    }
ngOnInit() {}
 dashboard() {
    this.router.navigate(['./dashboard']);
  }

  loginDetails(): void {
    console.log('Login Submitted', this.firstLogin.value);
  }

  togglePasswordVisibility() {

    if (this.isPassword === true) {
      this.isPassword = false;
    } else {
      this.isPassword = true;
    }
}
}
