import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string=""
  contraseña:string=""
  click:string="click"

  constructor(){ }
  captura(correoIngresado) {
    this.correo = correoIngresado
  }
  captura1(contraseñaIngresada) {
    this.contraseña = contraseñaIngresada
  }

  validacion(){
    if(this.correo && this.contraseña != "") {
      alert('todo ok')
    }
    else {
      alert('falta llenar los datos ')
    }
  }

  ngOnInit() {
  }

}
