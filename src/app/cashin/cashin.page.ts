import { Component, OnInit } from '@angular/core';
import {CashAvailable as CashModel} from '../models/budget.model';
import { CashAvailable } from '../constans/cashAvailable';
import {StorageService} from '../services/storage.service';
import { ModalController } from '@ionic/angular';
import {Alertservice} from '../services/alertservice';
@Component({
  selector: 'app-cashin',
  templateUrl: './cashin.page.html',
  styleUrls: ['./cashin.page.scss'],
})
export class CashinPage implements OnInit {
  cashIn:CashModel;
  cashav=CashAvailable;
  fields: string[]
constructor(private storage:StorageService, private modal:ModalController, private alert:Alertservice) {
    this.cashIn = new CashModel()
    this.fields = []
    this.storage.getAllAct().then(data =>{
      if (data.cashavAct) {
        this.cashIn = data.cashavAct;
        for (let key in this.cashIn){
          this.fields.push(key)
        }
      }
    })

  }

  ngOnInit() {
  }

  guardar () {
    this.storage.saveCashInAct(this.cashIn);
    this.alert.presentAlert("Notification","Saved Succesfully");
    this.cerrar();
  }
  getFieldsCashAvailable(){
    return Object.keys(this.cashav);
  }

  cerrar(){
    this.modal.dismiss();
  }


}
