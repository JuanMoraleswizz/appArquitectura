import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';
import {RegistroSocioComponent} from './registro-socio/registro-socio.component';
import {RegistroSocioModule} from './registro-socio/registro-socio.module';


const routes: Routes = [
  {
    path: 'registro-socio',
    component: RegistroSocioComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, RegistroSocioModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
