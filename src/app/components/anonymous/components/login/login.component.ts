import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../models/user';
import {UserService} from '../../../../services/user.service';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  builder: FormBuilder;
  userService: UserService;
  authService: AuthService;
  router: Router;

  constructor(builder: FormBuilder,
              router: Router,
              userService: UserService,
              authService: AuthService) {
    this.builder = builder;
    this.userService = userService;
    this.authService = authService;
    this.router = router;
  }

  ngOnInit() {
    this.loginForm = this.builder.group({
      login: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  login() {
    const user: User = this.loginForm.getRawValue();
    this.userService.login(user).subscribe(perf => {
      this.authService.setToken(perf);
      this.router.navigateByUrl('/auth');
    });
  }
}
