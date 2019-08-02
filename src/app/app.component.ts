import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
<<<<<<< HEAD
      icon: 'bonfire'
=======
      icon: 'md-bonfire'
>>>>>>> ba2cb5d734b787af1f60ca91f311565feeeafc4d
    },
    {
      title: 'Recursos',
      url: '/recursos',
<<<<<<< HEAD
      icon: 'clipboard'
=======
      icon: 'ios-stats'
>>>>>>> ba2cb5d734b787af1f60ca91f311565feeeafc4d
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
