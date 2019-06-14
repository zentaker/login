import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.component.html',
  styleUrls: ['./recupera.component.css']
})
export class RecuperaComponent implements OnInit {

  correo: string=""
  click:string="click"

  constructor(){ }
  captura(correoIngresado) {
    this.correo = correoIngresado
  }
  

  validacion(){

    var valid1 = /([A-Z0-9@]+ )/i;

    if(valid1.test(this.correo)) {
      alert('todo ok');
    }
    else {
      alert('Llenar los datos con un correo ')
    }
  }



  ngOnInit() {
  }

}
