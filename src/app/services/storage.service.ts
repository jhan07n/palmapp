import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Budget} from '../models/budget.model';
import { CashAvailable } from '../models/budget.model';
import { Wants } from '../models/budget.model';
import { HaveToPay } from '../models/budget.model';
// import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  budgets = [];
  cashav;
  wants;
  haves;
  cashAvAct;
  wantsAct;
  havesAct;
  custom;

  constructor(private storage: Storage) {
    this.getAll();
  }

  async getAll(){
    await this.storage.get("cashav").then((data) =>{
      this.cashav = data;
    })
    await this.storage.get("wants").then((data) =>{
      this.wants = data;
    })
    await this.storage.get("haves").then((data) =>{
      this.haves = data;
    })

    return {'cashav':this.cashav, 'wants': this.wants, 'haves':this.haves}

    // this.storage.get("budgets").then((data) => {
    //   if (data) {
    //       this.budgets = data;
    //   }
    //
    //   })
  }
  async saveCashIn(cashav:CashAvailable){
    if (cashav) this.storage.set("cashav",cashav);
  }
  async saveHaves(haves:HaveToPay){
    if (haves) this.storage.set("haves",haves);
  }
  async saveWants(wants:Wants){
    if (wants) this.storage.set("wants",wants);
  }

  async save(cashav:CashAvailable,haves:HaveToPay,wants:Wants){
    console.log(haves);
    if (cashav) this.storage.set("cashav",cashav);
    if (haves) this.storage.set("haves",haves);
    if (wants) this.storage.set("wants",wants);

    // await this.getAll();
    // if (this.budgets){
    //   console.log(this.budgets);
    //   // let tipe = typeof model;
    //   switch (tipo) {
    //     case 'CashAvailable':
    //         this.budgets = this.budgets.filter(budget => budget.name != object.name);
    //         // let xD = _.(this.budgets,{'name':name});
    //         // console.log("MMG: ",xD);
    //
    //
    //   }
    // }
    // this.budgets.push(object);
    // this.storage.set("budgets",this.budgets);
  }

  async find(key){
    this.storage.get(key).then((data) => {
    this.budgets = data
    })

  }

  async saveCashInAct(cashav:CashAvailable){
    if (cashav) this.storage.set("cashavAct",cashav);
  }
  async saveHavesAct(haves:HaveToPay){
    if (haves) this.storage.set("havesAct",haves);
  }
  async saveWantsAct(wants:Wants){
    if (wants) this.storage.set("wantsAct",wants);
  }
  async getAllAct(){
    await this.storage.get("cashavAct").then((data) =>{
      this.cashAvAct = data;
    })
    await this.storage.get("wantsAct").then((data) =>{
      this.wantsAct = data;
    })
    await this.storage.get("havesAct").then((data) =>{
      this.havesAct = data;
    })

    return {'cashavAct':this.cashAvAct, 'wantsAct': this.wantsAct, 'havesAct':this.havesAct}

  }

  async saveAct(cashav:CashAvailable,haves:HaveToPay,wants:Wants){
    console.log(haves);
    if (cashav) this.storage.set("cashavAct",cashav);
    if (haves) this.storage.set("havesAct",haves);
    if (wants) this.storage.set("wantsAct",wants);
  }



  async saveCustom(custom:any){
    console.log(custom);
    if (custom) this.storage.set("customBudget",custom);

  }

  async saveFields(fields:any){
    console.log(fields);
    if (fields) this.storage.set("fieldsCustom",fields);

  }

}
