import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'src/app/core/services/cookie.service';
import { User } from 'src/app/core/models/auth.models';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;
  user: User;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService, private cookieService: CookieService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (user:User) => {
          this.loading = false;
          // login successful if there's a jwt token in the response
          if (user && user.authenticated && user.token && user.type == 1) {
            this.user = user;
            // store user details and jwt in cookie
            this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
            this.router.navigate([this.returnUrl]);
          }else{
            Swal.fire({
              type: 'error',
              text: 'Just buyers can login!',
              confirmButtonClass: 'btn btn-confirm mt-2',
          });
          }
        
        },
        error => {
          this.error = error;

          this.loading = false;
          Swal.fire({
            type: 'error',
            text: error,
            confirmButtonClass: 'btn btn-confirm mt-2',
        });
        });
  }
}
