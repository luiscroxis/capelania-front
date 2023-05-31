import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  username: string | undefined;
  password: string | undefined;
  showSpinner: any;

  constructor(
    private router: Router
  ) { }


  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }

  submit() {
    if (this.form.valid) {
      this.login();

    }
  }
}
