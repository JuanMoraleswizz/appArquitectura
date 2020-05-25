import { Component, OnInit } from '@angular/core';
import {Vuelo} from '../models/vuelo';
import {MatTableDataSource} from '@angular/material/table';
import {Cliente} from '../models/cliente';

@Component({
  selector: 'app-lista-socios',
  templateUrl: './lista-socios.component.html',
  styleUrls: ['./lista-socios.component.scss']
})

export class ListaSociosComponent implements OnInit {
  public clientes: Cliente[];
  public displayedColumns: string[] = ['noDocumento', 'primerNombre', 'segundoNombre', 'primerApellido'
    , 'segundoApellido', 'millas'];
  public dataSource = new MatTableDataSource<Cliente>(this.clientes);

  constructor() { }

  ngOnInit(): void {
  }
  public cargarDatos(){

  }
}
