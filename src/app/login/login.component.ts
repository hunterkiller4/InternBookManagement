import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  logged = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.logged = true;
    if (this.loginForm.valid) {

    }
  }

  onClick() {
    switch (this.logged){
      case true : this.router.navigate(['/book'], {relativeTo: this.route});
                  break;
      default : alert('a');
      break;

    }
  }
}
