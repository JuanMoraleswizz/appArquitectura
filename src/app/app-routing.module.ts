import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';
import {RegistroSocioComponent} from './registro-socio/registro-socio.component';
import {RegistroSocioModule} from './registro-socio/registro-socio.module';
import {VuelosComponent} from './vuelos/vuelos.component';
import {VuelosModule} from './vuelos/vuelos.module';


const routes: Routes = [
  {
    path: 'registro-socio',
    component: RegistroSocioComponent
  },
  {
    path: 'vuelos',
    component: VuelosComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, RegistroSocioModule, VuelosModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
