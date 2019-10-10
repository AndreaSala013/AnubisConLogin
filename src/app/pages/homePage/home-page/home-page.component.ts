import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AppUtils } from 'src/app/utils/AppUtils';
import { PortainerService } from 'src/app/services/portainer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isLoading = false;

  constructor(private router:Router,
    private portainerService : PortainerService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    if(this.storage.get(AppUtils.KEY_CLOAK_TOKENS) == null){
      AppUtils.goToLoginPage(this.router);
    }else{
      this.isLoading = true;
      this.getContainers();
    }
  }

  logout(event){
    this.storage.remove(AppUtils.KEY_CLOAK_TOKENS);
    AppUtils.goToLoginPage(this.router);
  }

  async getContainers(){
    console.log("getCOntainers");
    let portainerToken = await this.portainerService.getPortainerToken();
    console.log(portainerToken);
    this.isLoading = false;
  }
  
}
