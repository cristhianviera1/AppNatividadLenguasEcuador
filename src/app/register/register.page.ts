
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { MenuController, AlertController } from '@ionic/angular';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  myForm: FormGroup;
  constructor(
    private alert: AlertController,
    private router: Router,
    private authService: AuthService,
    private storage: AngularFireStorage,
    private menu: MenuController,
    public fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }
  ngOnInit() {
    this.menu.enable(false)
  }
  add() {

    this.authService.registerUser(this.myForm.value.email, this.myForm.value.password)
      .then(res => {
        this.alert.create({
          header: 'Registrado exitósamente',
          message: 'Bienvenido a la comunidad MMV',
          buttons: ['ok :v']
        }).then(alert => {
          alert.present();
        });
        this.router.navigate(['/culturas']);
        this.menu.enable(true);
      }).catch(err => {
        this.alert.create({
          header: 'Ha fallado el registro',
          message: 'Revise los campos campos',
          buttons: ['alv prro']
        }).then(alert => {
          alert.present();
        });
      }
      )
  }
}
