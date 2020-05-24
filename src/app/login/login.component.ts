import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder ) { }

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
    console.log(this.form.value);
  }
}
