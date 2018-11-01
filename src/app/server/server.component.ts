import { Component, Input } from "@angular/core";

@Component({
    selector: 'server-component',
    templateUrl: "./server.component.html"
})
export class ServerComponent {
    
    @Input() name: string = 'Boo-Boo-Boo';
    
    @Input() serverID: number = 10;
    public serverStatus: string = 'offline';

    // constructor(public server: string) { 
    //     console.log("====== server name is: ", server);
    // }

    public getServerStatus() {
        return this.serverStatus;
    }
}