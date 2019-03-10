import { Component, OnInit } from '@angular/core';
import { Budget } from '../models/budget.model';
import { Wants } from '../constans/wants';
import { StorageService } from '../services/storage.service';
import {Alertservice} from '../services/alertservice';
import { ModalController } from '@ionic/angular';
import { AddFieldPage } from '../add-field/add-field.page';

@Component({
  selector: 'app-wantspage',
  templateUrl: './wantspage.page.html',
  styleUrls: ['./wantspage.page.scss'],
})
export class WantspagePage implements OnInit {
  budgetName: string = "Budget"
  name: string  
  budget: Budget
  fields:string[]
  selectedField: string
  wants = Wants
  constructor(public storage:StorageService, private alert:Alertservice
    ,public modalCtrl: ModalController) {
    this.budget = new Budget();  
    this.fields = [] 
    this.selectedField=""
  }
  
 

  ngOnInit() {
    this.storage.getAll().then((data) =>{
     
         if (data.wants){
          this.budget.wants = data.wants;
          for (let key in this.budget.wants){
            this.fields.push(key)
          }
        }
  });

}

guardar(){
  // this.getKeyCashAvailable("rentMortgage")
 /*    console.log(this.budget.haveToPay); */
  this.storage.saveWants(this.budget.wants);
  this.storage.getAllAct().then(
    data=> {
      // let cin = data.cashavAct;
      // let han = data.havesAct;
      let wan = data.wantsAct;

      if (!(wan)){
        this.storage.saveWantsAct(this.budget.wants);
      }
    }
  );
  this.alert.presentAlert("Notification","Saved Succesfully");

}

getFieldsWants(){
  return Object.keys(this.wants)
}



  async presentAddModal(){

    const mod = await this.modalCtrl.create({
      component: AddFieldPage,
      componentProps:{
        propiedades: this.wants,
        selectName: "Wants"
      }    
    });

    mod.onDidDismiss().then(data=>{
      this.fields.push(data.data)
    })
    
    return await mod.present();
  }
  change($event){
    console.log("Se selecciono : ", this.selectedField)
    this.fields.push(this.selectedField)
    this.selectedField = ""
  }
}

