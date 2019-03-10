import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../services/authservice';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  signin ={
    email:'',
    password:'',
    tel:''
  }
  constructor(public auth:AuthProvider, public alert:AlertController, public navctr:NavController) { }

  ngOnInit() {
  }

  signup(){
    this.auth.registerUser(this.signin).then( async user=>{
      const alerta = await this.alert.create({
        header:'Sign Up',
        message:'Success',
        buttons:['Ok']
      })
      alerta.present();
      this.navctr.navigateRoot('/home')
    })
    .catch( async err=>{
      const alerta = await this.alert.create({
        header:'Sign Up Error',
        message:err.message,
        buttons:['Ok']
      })
      alerta.present();
      
    })
  }
}
