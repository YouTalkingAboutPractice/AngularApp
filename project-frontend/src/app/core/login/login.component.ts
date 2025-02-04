import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginData } from '../Classes/LoginData.model';
import { LoginService } from '../Services/login.service';
import { UserToken } from '../Classes/user-token';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule, NgbModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public LoginData: LoginData = new LoginData();
  constructor(private LoginSrv: LoginService, private router: Router) {}
  ngOnInit() {
    this.LoginSrv.logoutUser();
  }
  ngAfterView() {}
  onSubmit() {
    console.log(this.LoginData);
    this.LoginSrv.LoginUser(this.LoginData).subscribe(
      async (res: UserToken) => {
        if (res.token) {
          alert('Login Successful');
          localStorage.setItem('userToken', res.token);
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('role', res.role);
          localStorage.setItem('Name', res.name);

          // Set the logged-in status
          this.LoginSrv.setLoggedIn();
        } else {
          alert('Error somewhere');
        }
      },
      (error) => {
        alert('Wrong Username or Password');
        console.log(error);
      }
    );
  }
}
