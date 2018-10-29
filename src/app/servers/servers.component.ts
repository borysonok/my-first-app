import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public allowAddNewServer = false;

  constructor() { 
    setTimeout(() => { 
      this.allowAddNewServer = true;
    }, 1000);
  }

  ngOnInit() {
  }

}
