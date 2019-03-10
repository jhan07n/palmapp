import { Component, OnInit, Input } from '@angular/core';
import { Budget } from '../models/budget.model';
import { CashAvailable } from '../constans/cashAvailable';
import { HaveToPay } from '../constans/haveToPay';
import { Wants } from '../constans/wants';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit {
  @Input()
  budgetName: string = "Budget"
  name: string  
  budget: Budget
  cashAvailable = CashAvailable
  haveToPay =HaveToPay
  wants = Wants

  date: Date

  constructor(public storage:StorageService) {
    this.budget = new Budget();   

    
  }

  ngOnInit() {
    let date = new Date()
    let mont = date.toDateString().split(' ')[1]
    let year = date.getFullYear()
    let name = `${mont}-${year}`
    this.budget.name = name
    
    this.storage.getAll().then((data) =>{
      if (data.cashav){
     this.budget.cashAvailable = data.cashav;
      }
      if (data.haves){
        this.budget.haveToPay = data.haves;
         }
         if (data.wants){
          this.budget.wants = data.wants;}
           
     
  
      });
  }

  Mostrar(){
    // this.getKeyCashAvailable("rentMortgage")
    this.storage.getAll().then((data) =>{
      console.log(data);
      });

  }
  guardar(){
    // this.getKeyCashAvailable("rentMortgage")
   /*    console.log(this.budget.haveToPay); */
    this.storage.save(this.budget.cashAvailable,this.budget.haveToPay,this.budget.wants);
    this.storage.getAllAct().then(
      data=> {
        let cin = data.cashavAct;
        let han = data.havesAct;
        let wan = data.wantsAct;

        if (!(cin && han && wan)){
          this.storage.saveAct(this.budget.cashAvailable,this.budget.haveToPay,this.budget.wants);
        }
      }
    );
    

  }

  getFieldsCashAvailable(){
    return Object.keys(this.cashAvailable)
  }

  getFieldsHaveToPay(){
    return Object.keys(this.haveToPay)
  }
  getFieldsWants(){
    return Object.keys(this.wants)
  }





}
