import {
  Component
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'cg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: FormGroup;
  isPassword = true;

  constructor(fb: FormBuilder) {
    this.login = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }
  loginDetails(): void {
    console.log('Login Submitted', this.login.value);
  }
  togglePasswordVisibility() {

    if (this.isPassword === true) {
      this.isPassword = false;
    } else {
      this.isPassword = true;
    }


  }
}
