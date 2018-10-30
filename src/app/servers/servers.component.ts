import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public allowAddNewServer = false;
  public serverCreationStatus = 'No server was created';

  constructor() { 
    setTimeout(() => { 
      this.allowAddNewServer = true;
    }, 1000);
  }

  ngOnInit() {
  }

  onServerCreate($ev) { 
    this.serverCreationStatus = 'New Server was added';
    this.allowAddNewServer = false;
  }

}
