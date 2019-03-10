import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  nombre:any;
  apellido:any;
  constructor(private alerta:AlertController, public almacen:Storage) { }

  ngOnInit() {
  }

  async guardar(){
    
this.almacen.set('info',{'nombre':this.nombre, 'apellido':this.apellido}).then (
  async data =>  {const alert = await this.alerta.create(
    {
      header:'Info',
      message:'Hola funciono',
      buttons:['OK']
    }
  );
   alert.present();
  }
)
  }

  async Mostrar(){
    this.almacen.get('info').then(
      async data =>{ const alert = await this.alerta.create(
        {
      header:'Nombre',
      message: 'Tu numbre es :' + data.nombre + '\n' + 'Tu apellido es:' +data.apellido,
      buttons:['OK']
        });
      alert.present();
      }
    )
  }
}
