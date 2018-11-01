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
  public newServerName = 'test';
  public serversCollection = ['Server_01', 'Server_02'];

  constructor() {
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 1000);
  }

  ngOnInit() {
  }

  public onServerCreate($ev) {
    this.serverCreationStatus = 'New Server was added. Server name is: ' + this.newServerName;
    this.serversCollection.push(this.newServerName);
  }

  public onUpdateServerName(ev: Event) {
    this.newServerName = (<HTMLInputElement>ev.target).value;
  }

}
