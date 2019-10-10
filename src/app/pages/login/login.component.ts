import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AppUtils } from 'src/app/utils/AppUtils';
import { KeyCloakService } from 'src/app/services/key-cloak.service';
import { KeycloakTokens } from 'src/app/model/KeycloakTokens';
import { PortainerService } from 'src/app/services/portainer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private kService:KeyCloakService,
    private pService : PortainerService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private router:Router) { }

  ngOnInit() {
    if(this.storage.get(AppUtils.KEY_CLOAK_TOKENS) != null){
      AppUtils.goToHomePage(this.router);
    }else{
      this.loginForm = this.fb.group({
        username: ['',Validators.required],
        password: ['', Validators.required]
      })
    }
  }

  async login(value){
    console.log("login");
    this.isLoading = true;
    let portainerToken = await this.pService.getPortainerToken();
    console.log(portainerToken);
    let keycloakTokens : KeycloakTokens = await this.kService.getKeycloakTokens(value.username, value.password);
    this.isLoading = false;
    if(keycloakTokens == null){
      alert("Username o password errati");
    }
    else{
      this.saveInLocalStorage(keycloakTokens);
      AppUtils.goToHomePage(this.router);
    }
  }

  saveInLocalStorage(keycloakTokens){
    this.storage.set(AppUtils.KEY_CLOAK_TOKENS, keycloakTokens);
  }

  

}
