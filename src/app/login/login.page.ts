import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userName : string
  myForm: FormGroup;
  constructor(private authService: AuthService,    
    public router: Router,
    public menu: MenuController,
    public fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }
  ngOnInit() {

    this.menu.enable(false);
  }



  OnSubmitLogin() {
    this.authService.login(this.myForm.value.email, this.myForm.value.password).then(res => {
      //this.userName=res.user.email;
      this.menu.enable(true);
      this.router.navigate(['/recursos']);
    }).catch(err => {
      this.menu.enable(false);
      alert("Los datos ingresados son incorrectos o no existen.")
    }
    )
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.router.navigate(['/recursos']);
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    console.log("<3");
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['recursos']);
  }

  registro() {
    this.router.navigate(['/register']);
  }

}
