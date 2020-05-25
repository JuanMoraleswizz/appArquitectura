import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistroSocioService} from './registro-socio.service';
import {Cliente} from '../models/cliente';

@Component({
  selector: 'app-registro-socio',
  templateUrl: './registro-socio.component.html',
  styleUrls: ['./registro-socio.component.scss']
})
export class RegistroSocioComponent implements OnInit {
 public formCliente: FormGroup;
  public cliente: Cliente;
  constructor(private formBuilder: FormBuilder,
              private registroClienteService: RegistroSocioService ) { }

  ngOnInit(): void {
    this.crearForm();
  }
  public crearForm(){
    this.formCliente =  this.formBuilder.group({
      noDocumento: new FormControl('', Validators.required),
      nombre: new  FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      cuidad: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required)
    });
  }
  public save(){
    this.cliente = this.formCliente.value;
    this.registroClienteService.save(this.cliente).subscribe(response =>{
      console.log(response)
    });
  }

}
