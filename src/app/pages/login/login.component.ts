import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { ServletResponse } from 'src/app/model/ServletResponde';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  KEY_CLOAK_TOKENS = "KeyCloakTokens";

  isLoading: boolean = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private service:ServiceService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private router:Router) { }

  ngOnInit() {
    if(this.storage.get(this.KEY_CLOAK_TOKENS) != null){
      this.goToHomePage();
    }else{
      this.loginForm = this.fb.group({
        username: ['',Validators.required],
        password: ['', Validators.required]
      })
    }
  }

  async login(value){
    this.isLoading = true;
    let servletResp : ServletResponse = await this.service.getKeycloakTokens(value.username, value.password);
    this.isLoading = false;
    if(servletResp.status != 200){
      alert(servletResp.message);
    }
    else{
      this.saveInLocalStorage(servletResp.message);
      this.goToHomePage();
    }
  }

  saveInLocalStorage(keycloakTokens){
    this.storage.set(this.KEY_CLOAK_TOKENS, keycloakTokens);
  }

  goToHomePage(){
    this.router.navigate(['/home']);
  }

}
