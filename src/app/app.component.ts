import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthProvider } from '../app/services/authservice';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  
  public appPages = [
    {
      title: 'new budget',
      url: '/access',
      icon: 'assets/icon/mybudget.svg'
    },
    {
      title: 'summary',
      url: '/summary',
      icon: 'assets/icon/summary.svg'
    },
    {
      title: 'dashboard',
      url: '/home',
      icon: 'assets/icon/dashboard.svg'
    },
    {
      title: 'tutorial',
      url: '/dashboard',
      icon: 'assets/icon/mybudget.svg'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth:AuthProvider,
    public navctr:NavController,
    private afAuth :  AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.afAuth.authState
    .subscribe(
      
      user=>{
        
        if (user){
          this.navctr.navigateRoot('/home')
        }
        else{
          this.navctr.navigateRoot('/welcome')
        }
      }
      
    )
      this.splashScreen.hide();
      
    });
    
  }

  logout(){
    this.auth.logout();
  }
}
