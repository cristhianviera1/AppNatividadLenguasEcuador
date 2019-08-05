import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timeoutWith } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'ios-compass'
    },
    {
      title: 'Culturas',
      url: '/culturas',
      icon: 'md-bonfire'
    },
    {
      title: 'Perfil',
      url: '/recursos',
      icon: 'ios-contact'
    }
  ];

  constructor(
    private authService: AuthService, private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar,
    public router: Router, public menu: MenuController, private spinnerService: NgxSpinnerService) {
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
    });
  }
}
