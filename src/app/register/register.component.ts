import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registered = false;
  checkbox = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      acceptTerms: [false, Validators.required]
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.registered = true;
    if (this.registerForm.valid && this.checkbox) {
      this.router.navigate(['/book'], { relativeTo: this.route });
    }
  }

  onReset() {
    this.registered = false;
    this.checkbox = false;
    this.registerForm.reset();
  }

  checkBox() {
    this.checkbox = !this.checkbox;
  }
}
