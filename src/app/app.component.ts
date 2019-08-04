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
      title: 'Home',
      url: '/home',
      icon: 'ios-map'
    },
    {
      title: 'Culturas',
      url: '/culturas',
      icon: 'md-bonfire'
    },
    {
      title: 'Recursos',
      url: '/recursos',
      icon: 'ios-stats'
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
