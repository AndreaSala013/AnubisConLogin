import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { ServletResponse } from 'src/app/model/ServletResponde';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private service:ServiceService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  async login(value){
    this.isLoading = true;
    let servletResp : ServletResponse = await this.service.getKeycloakTokens(value.username, value.password);
    this.isLoading = false;
    if(servletResp.status != 200){
      alert(servletResp.message);
    }
    else{
      
    }
  }

}
