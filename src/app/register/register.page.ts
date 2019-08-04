
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { MenuController } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  myForm: FormGroup;
  constructor(private router: Router,
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
    this.authService.registerUser(this.myForm.value.email,this.myForm.value.password)
      .then(res => {
        alert("Registro Exitoso")
        this.router.navigate(['/login']);
        this.menu.enable(true);
      }).catch(err => alert("Los datos ingresados son incorrectos o no existen."))
  }
}
