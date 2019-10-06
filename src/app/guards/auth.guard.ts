import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authService: AuthService;

  constructor(private router: Router,
              authService: AuthService) {
    this.authService = authService;
  }

  canActivate = () => {
    if (this.authService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
