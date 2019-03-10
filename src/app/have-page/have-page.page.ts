import { Component, OnInit } from '@angular/core';
import { Budget } from '../models/budget.model';
import { HaveToPay } from '../constans/haveToPay';
import { StorageService } from '../services/storage.service';
import {Alertservice} from '../services/alertservice';
import { ModalController } from '@ionic/angular';
import { AddFieldPage } from '../add-field/add-field.page';

@Component({
  selector: 'app-have-page',
  templateUrl: './have-page.page.html',
  styleUrls: ['./have-page.page.scss'],
})
export class HavePagePage implements OnInit {
  budget: Budget
  haveToPay = HaveToPay
  date: Date
  fields:string[]
  selectedField: string
  constructor(public storage:StorageService,
     private alert:Alertservice,
     public modalCtrl: ModalController) {
    this.budget = new Budget();   
    this.fields = [] 
    this.selectedField = ""
  }

  ngOnInit() {
    this.storage.getAll().then((data) =>{
     
      if (data.haves){
        this.budget.haveToPay = data.haves;
          for (let key in this.budget.haveToPay){
            this.fields.push(key)
          }
        }
      });
  }

  guardar(){
    // this.getKeyCashAvailable("rentMortgage")
   /*    console.log(this.budget.haveToPay); */
    this.storage.saveHaves(this.budget.haveToPay);
    this.storage.getAllAct().then(
      data=> {
        // let cin = data.cashavAct;
        let han = data.havesAct;
        // let wan = data.wantsAct;

        if (!(han)){
          this.storage.saveHavesAct(this.budget.haveToPay);
        }
      }
    );
    this.alert.presentAlert("Notification","Saved Succesfully");

  }

  getFieldsHaveToPay(){
    return Object.keys(this.haveToPay)
  }

  async presentAddModal(){

    const mod = await this.modalCtrl.create({
      component: AddFieldPage,
      componentProps:{
        propiedades: this.haveToPay,
        selectName: "Cash Available"
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
