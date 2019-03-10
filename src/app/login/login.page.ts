import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../services/authservice';
import { NavController, AlertController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username:any;
password:any;
isShown= false;
signup = {email:'', password:''}
  constructor(private storag:Storage, public AuthProvide:AuthProvider, public navctr:NavController, public alertctr:AlertController){
  }
  
  checkFocus(){
    this.isShown = true;
}

checkBlur() {
    this.isShown = false;
}
  ngOnInit() {
  }

   signin(){
    console.log(this.signup.email);
 this.AuthProvide.loginUser(this.signup).then((user) =>  {
   console.log('Listo',user)
   this.navctr.navigateRoot('/home');
}
)
.catch( async err=> {
 
const alerta = await this.alertctr.create(
  {
    header:'Login Error',
    message:err.message,
    buttons: [
      'Ok'
    ]
    
  }
)
alerta.present();

})
}
}
