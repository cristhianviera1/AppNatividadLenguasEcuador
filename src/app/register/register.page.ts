
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }
  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }


  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          if (user) {
            user.updateProfile({
              displayName: '',

            }).then(() => {
              this.router.navigate(['admin/list-books']);
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
  }
  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLoginRedirect(): void {
    this.router.navigate(['admin/list-books']);
  }

}
