import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {HaveToPay as htpModel} from '../models/budget.model';
import {HaveToPay} from '../constans/haveToPay';
import { ModalController } from '@ionic/angular';
import {Alertservice} from '../services/alertservice';

@Component({
  selector: 'app-have',
  templateUrl: './have.page.html',
  styleUrls: ['./have.page.scss'],
})
export class HavePage implements OnInit {
  haves:htpModel;
  havesConst = HaveToPay;
  fields: string[]
  constructor(private storage:StorageService, private modal:ModalController, private alert:Alertservice) {
    this.haves = new htpModel();
    this.fields=[]
    this.storage.getAllAct().then(data =>{
      console.log(data.havesAct);
      if (data.havesAct) {
          this.haves = data.havesAct;
          for (let key in this.haves){
            this.fields.push(key)
          }
      }
    })

  }

  ngOnInit() {
  }

  guardar () {
    this.storage.saveHavesAct(this.haves);
    this.alert.presentAlert("Notification","Saved Succesfully");
    this.cerrar();
  }

   getFieldsHaveToPay(){
    return Object.keys(this.havesConst);
  }
  cerrar(){
    this.modal.dismiss();
  }


}
