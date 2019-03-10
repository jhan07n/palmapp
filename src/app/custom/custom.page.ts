import { Component, OnInit } from '@angular/core';
import { ICustomField } from './custom';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.page.html',
  styleUrls: ['./custom.page.scss'],
})
export class CustomPage implements OnInit {
  inputFields: string[]
  customFields: ICustomField[]
  constructor() {
    this.inputFields= []
    this.customFields = []
   }

  ngOnInit() {
  }


  guardar(){
    console.log("Estos son los inputs")
    console.log(this.inputFields)
    this.inputFields.forEach(field=> {
      let textKey = field.split(' ').join('');

      let custom = {
            texto: field,
            key: textKey
      }
      this.customFields.push(custom)
    })
    console.log("Estos son los customFields: ", this.customFields)

  }
}
