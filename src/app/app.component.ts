import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timeoutWith } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, 
    public router: Router,
    public menu: MenuController
  ) {
    this.initializeApp();
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
