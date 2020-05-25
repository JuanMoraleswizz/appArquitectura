import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuelosComponent } from './vuelos.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialModules} from '../material.modules';



@NgModule({
  declarations: [VuelosComponent],
  imports: [
    CommonModule, MaterialModules
  ]
})
export class VuelosModule { }
