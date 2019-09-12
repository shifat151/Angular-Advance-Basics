import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deep-dive';



  serverElements= [{type: 'server', name:
   'Testserver', content:'Just a test server'}
];

   onserverAdded(serverData:{serverName: string, serverContent: string})  {
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    }
    );
  }
  onblueprintAdded(blueprintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    }
    );
  }
  onChangesFirst(){
    this.serverElements[0].name='Changed';

  }
  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
}
