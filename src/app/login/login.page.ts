import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router,public menu: MenuController) { }

  ngOnInit() {
   
      this.menu.enable(false);
  }

 

  OnSubmitLogin() {
    this.authService.login(this.email, this.password).then( res => {this.menu.enable(true);
this.router.navigate(['/home']);
    }).catch(err => {this.menu.enable(false);
      alert("Los datos ingresados son incorrectos o no existen.")
    }
    )
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.router.navigate(['/home']);
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['home']);
  }

  registro(){
    this.router.navigate(['/register']);
  }

}
