import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {
  nombre:any;
  constructor() {

   
   }

  ngOnInit() {
    let date = new Date()
    let mont = date.toDateString().split(' ')[1]
    let year = date.getFullYear()
    let name = `${mont}-${year}`;
    this.nombre = name;
   
  }

 

}
