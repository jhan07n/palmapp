import { Component, OnInit } from '@angular/core';
import { Budget } from '../models/budget.model';
import { CashAvailable } from '../constans/cashAvailable';
import { StorageService } from '../services/storage.service';
import {Alertservice} from '../services/alertservice';
import { AddFieldPage } from '../add-field/add-field.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cashinpage',
  templateUrl: './cashinpage.page.html',
  styleUrls: ['./cashinpage.page.scss'],
})
export class CashinpagePage implements OnInit {
  budget: Budget
  cashAvailable = CashAvailable
  date: Date
  fields: string[]
  selectedField: string
  constructor(public modalCtrl: ModalController ,public storage:StorageService, private alert:Alertservice) {
    this.budget = new Budget();  
    this.fields = [] 
    this.selectedField = ""
  }

  ngOnInit() {
    this.storage.getAll().then((data) =>{
      if (data.cashav){
          this.budget.cashAvailable = data.cashav;
          for (let key in this.budget.cashAvailable){
              this.fields.push(key)
          }
          console.log("Este es el objeto: ",this.budget.cashAvailable)
          console.log("Estos son los fields ",this.fields)

      }
      });
  }

  guardar(){
    // this.getKeyCashAvailable("rentMortgage")
   /*    console.log(this.budget.haveToPay); */
    this.storage.saveCashIn(this.budget.cashAvailable);
    this.storage.getAllAct().then(
      data=> {
        let cin = data.cashavAct;
        // let han = data.havesAct;
        // let wan = data.wantsAct;

        if (!(cin)){
          this.storage.saveCashInAct(this.budget.cashAvailable);
        }
      }
    );
    this.alert.presentAlert("Notification","Saved Succesfully");
  }


  getFieldsCashAvailable(){
    return Object.keys(this.cashAvailable)
  }

  async presentAddModal(){

    const mod = await this.modalCtrl.create({
      component: AddFieldPage,
      componentProps:{
        propiedades: this.cashAvailable,
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
