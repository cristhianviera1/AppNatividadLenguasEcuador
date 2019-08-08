import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timeoutWith } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuController } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Inicio',
      url: '/recursos',
      icon: 'ios-home'
    },
   
    {
      title: 'Culturas',
      url: '/culturas',
      icon: 'md-bonfire'
    },
    {
      title: 'Mapa de Calor',
      url: '/home',
      icon: 'ios-compass'
    }
    
  ];

  constructor(
    private authService: AuthService, private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar,
    public router: Router, public menu: MenuController, private spinnerService: NgxSpinnerService,private fcm: FCM) {
    this.initializeApp();
  }

  ngOnInit() {
    this.spinner();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

  onLogout() {
    this.authService.logoutUser();
    this.menu.enable(false);
    this.router.navigate(['/login']);
    console.log("<3");
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.getToken().then(
        (token: string) => {
          console.log("Este es el token para este dispositivo: " + token);
        }
      ).catch(error =>{
        console.log(error);
      });

this.fcm.onTokenRefresh().subscribe((token: string) => {
  console.log("Actualizacion de token: " + token);
});

this.fcm.onNotification().subscribe( data => {
  if(data.wasTapped) {
    // Aplicación en segundo plano
    console.log("Estamos en segundo plano  " + JSON.stringify(data));

  } else {
// Aplicación en primer plano
console.log("Estamos en primer plano  " + JSON.stringify(data));
  }

}, error =>{
 console.log("error error"  + error);
});

    });
  }
}
