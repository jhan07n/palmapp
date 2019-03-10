import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {Wants as WantsModel} from '../models/budget.model';
import {Wants} from '../constans/wants';
import { ModalController } from '@ionic/angular';
import { Alertservice } from '../services/alertservice';

@Component({
  selector: 'app-wants',
  templateUrl: './wants.page.html',
  styleUrls: ['./wants.page.scss'],
})
export class WantsPage implements OnInit {
  wants: WantsModel;
  wantsConst= Wants;
  fields: string[]
  constructor(private storage:StorageService, private modal:ModalController, private alert:Alertservice) {
    this.wants = new WantsModel();
    this.fields = []
    this.storage.getAllAct().then(data =>{
      if (data.wantsAct){
        this.wants = data.wantsAct;
        for (let key in this.wants){
          this.fields.push(key)
        }
      } 
    })

  }

  ngOnInit() {
  }

  guardar () {
    this.storage.saveWantsAct(this.wants);
    this.alert.presentAlert("Notification","Saved Succesfully");
    this.cerrar();
  }
    getFieldsWatns(){
    return Object.keys(this.wantsConst);
  }
  cerrar(){
    this.modal.dismiss();
  }

}
