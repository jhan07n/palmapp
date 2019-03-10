import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseConfigService } from './services/firebase-config.service'
import { AuthProvider } from './services/authservice';
import { CashinPageModule } from './cashin/cashin.module';
import { WantsPageModule } from './wants/wants.module';
import { HavePageModule } from './have/have.module';
import { AddFieldPageModule } from './add-field/add-field.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      scrollAssist: false
    }),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfigService.fire),
    AngularFireAuthModule,
    CashinPageModule,
    WantsPageModule,
    HavePageModule,
    AddFieldPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuth,
    AuthProvider,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
