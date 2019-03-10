import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.page.html',
  styleUrls: ['./add-field.page.scss'],
})
export class AddFieldPage implements OnInit {
  @Input() propiedades: any;
  @Input() selectName: string;
  selectedProperty: any
  constructor(private modal:ModalController) {
    this.selectedProperty = {he: "haha"}
   }

  ngOnInit() {

  
    console.log("Las props pasadas: ", this.propiedades)
    console.log("El nombre es: ", this.selectName)

  }


  getFields(){
    return Object.keys(this.propiedades);
  }
  cerrar(){
    this.modal.dismiss(this.selectedProperty);
  }

  guardar(){
    console.log("el selectedproperty es: ", this.selectedProperty)    
  }

  change($event) {
    
    console.log("el selectedproperty es: ", this.selectedProperty)
    console.log("el event es: ", $event.value)
    this.cerrar()
  }
}
