import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;

  @Output() serverCreated= new EventEmitter
  <{serverName: string, serverContent: string}>();
  @Output() blueprintCreated =  new EventEmitter
  <{serverName: string, serverContent: string}>();


  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverNameInput: HTMLInputElement){
    this.serverCreated.emit
    ({serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  // onAddBlueprint(serverNameInput:HTMLInputElement){
  //   this.blueprintCreated.emit({serverName: serverNameInput.value,
  //     serverContent: this.newServerContent});
  // }
    onAddBlueprint(serverNameInput:HTMLInputElement){
    this.blueprintCreated.emit({serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
   }


}
