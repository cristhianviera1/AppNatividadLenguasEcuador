
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage, private menu: MenuController) { }
  public email: string = '';
  public password: string = '';

  ngOnInit() {
    this.menu.enable(false)
  }


  add(){
    this.authService.registerUser(this.email, this.password)
    .then( res => { alert("Registro Exitoso")
      this.router.navigate(['/login']);
          }).catch(err => alert("Los datos ingresados son incorrectos o no existen."))
        }
  

}
