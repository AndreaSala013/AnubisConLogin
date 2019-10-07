import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() onLogout = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  logout(){
    this.onLogout.emit();
  }

}
