import { Component } from "@angular/core";

@Component({
    selector: 'server-component',
    templateUrl: "./server.component.html"
})
export class ServerComponent {
    public serverID: number = 10;
    public serverStatus: string = 'offline';


    public getServerStatus() {
        return this.serverStatus;
    }
}