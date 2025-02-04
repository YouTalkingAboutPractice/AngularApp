import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginData } from '../Classes/LoginData.model';
import { environment } from '../../../environments/environment';
import { Constants } from '../Constants/constants';
import { UserToken } from '../Classes/user-token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn = signal<boolean>(false);
  readonly isLoggedIn$ = this.isLoggedIn.asReadonly();

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn.set(localStorage.getItem('isLoggedIn') === 'true');
  }

  LoginUser(obj: LoginData): Observable<UserToken> {
    return this.http.post<UserToken>(
      environment.api_url + Constants.API_ENDPOINT.LOGIN,
      obj
    );
  }
  setLoggedIn() {
    localStorage.setItem('isLoggedIn', 'true');
    console.log('before', this.isLoggedIn());
    this.isLoggedIn.set(true);
    console.log('after', this.isLoggedIn());
    // Navigate to the Dashboard
    this.router.navigate(['/Dashboard']);
  }
  logoutUser() {
    // Modified logout method
    localStorage.removeItem('userToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    this.isLoggedIn.set(false);
  }
}
