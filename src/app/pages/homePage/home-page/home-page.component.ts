import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AppUtils } from 'src/app/utils/AppUtils';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  

  constructor(private router:Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    if(this.storage.get(AppUtils.KEY_CLOAK_TOKENS) == null){
      AppUtils.goToLoginPage(this.router);
    }
  }

  logout(event){
    this.storage.remove(AppUtils.KEY_CLOAK_TOKENS);
    AppUtils.goToLoginPage(this.router);
  }


  
}
