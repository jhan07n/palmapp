import { CustomPage } from './../custom/custom.page';
import { Component } from '@angular/core';
import { MenuController, AlertController, ModalController } from '@ionic/angular';
import {StorageService} from '../services/storage.service';
import {CashAvailable, HaveToPay, Wants} from '../models/budget.model';
import { CashinPage } from '../cashin/cashin.page';
import { HavePage } from '../have/have.page';
import { WantsPage } from '../wants/wants.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre:string;
  cashav:CashAvailable;
  cashAvAct:CashAvailable;
  wants:Wants;
  wantsAct:Wants;
  have:HaveToPay;
  havesAct:HaveToPay;
  cashSum:number;
  wantsSum:number;
  haveSum:number;
  cashActSum:number;
  wantsActSum:number;
  haveActSum:number;
  inps:any[];

  constructor(public menuCtrl:MenuController,public storage:StorageService, public alerta:AlertController, private modal:ModalController) {
    this.cashSum = 0
    this.wantsSum = 0
    this.haveSum = 0
    this.cashActSum = 0
    this.wantsActSum = 0
    this.haveActSum = 0
  }
 
  ngOnInit() {
    let date = new Date()
    let mont = date.toDateString().split(' ')[1]
    let year = date.getFullYear()
    let name = `${mont}-${year}`;
    this.nombre = name;

    this.storage.getAllAct().then(data =>{
      this.cashAvAct = data.cashavAct;
      this.wantsAct = data.wantsAct;
      this.havesAct = data.havesAct;

      for (let key in this.cashAvAct) {
          this.cashActSum += parseInt(this.cashAvAct[key]);
      }
      for (let key in this.wantsAct) {
          this.wantsActSum += parseInt(this.wantsAct[key]);
      }
      for (let key in this.havesAct) {
          this.haveActSum += parseInt(this.havesAct[key]);
      }

    })

    this.storage.getAll().then(data =>{
      this.cashav = data.cashav;
      this.wants = data.wants;
      this.have = data.haves;
      for (let key in this.cashav) {
          this.cashSum += parseInt(this.cashav[key]);
      }
      for (let key in this.wants) {
          this.wantsSum += parseInt(this.wants[key]);
      }
      for (let key in this.have) {
          this.haveSum += parseInt(this.have[key]);
      }
    })
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  async cashinmd(){

    const mod = await this.modal.create({
      component: CashinPage,
     
    });
    return await mod.present();
  }
  

  async havemd(){

    const mod = await this.modal.create({
      component: HavePage,
     
    });
    return await mod.present();
  }
  async wantmd(){

    const mod = await this.modal.create({
      component: WantsPage,
     
    });
    return await mod.present();
  }
  async custommd(){

    const mod = await this.modal.create({
      component: CustomPage,
     
    });
    return await mod.present();
  }

}
