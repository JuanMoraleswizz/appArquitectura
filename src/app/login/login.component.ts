import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Usuario} from '../models/usuario';
import {UserInfo} from '../models/user-info';
import {NavigationExtras, Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public user: UserInfo;
  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder ,
              private  router: Router) { }

  ngOnInit(): void {
    this.crearForm();
  }
  public crearForm(){
    this.form = this.formBuilder.group({
      username: new  FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  public autenticar(){
    const navigationExtras: NavigationExtras = {
      skipLocationChange: true
    };
    console.log(this.form.value);
    this.user = this.form.value;
    this.loginService.autenticar(this.user).subscribe(response => {
      alert(response);
      if (response === 'autenticado con exito'){
        this.router.navigate( ['home'], navigationExtras);
      }
    });
  }
}
