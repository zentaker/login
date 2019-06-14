import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RecuperaComponent } from './components/recupera/recupera.component';

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'registro', component: RegistroComponent },
    {path: 'recupera', component: RecuperaComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);