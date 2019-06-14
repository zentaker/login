import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//rutas

import { APP_ROUTING } from './app.routes';


//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RecuperaComponent } from './components/recupera/recupera.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    RecuperaComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
