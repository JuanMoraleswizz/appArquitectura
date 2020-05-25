import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Vuelo} from '../models/vuelo';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {
  public vuelos: Vuelo[];
  public displayedColumns: string[] = ['fecha', 'horaSalida', 'horaLlegada', 'empresa', 'valor'];
  public dataSource = new MatTableDataSource<Vuelo>(this.vuelos);
  constructor() { }

  ngOnInit(): void {
  }

}
