import { Component,
   OnInit,
    Input,
     ViewEncapsulation,
     SimpleChanges
    } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
  // For disabling component wise color(The css properties declared in this component's css file will be global)
})
export class ServerElementComponent implements OnInit{
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
   }

   ngOnChanges(changes:SimpleChanges){
     console.log("ngOnChanges called");
     console.log(changes);

   }

  ngOnInit() {
    console.log("ngOnInit called !");
  }

  // ngOnDestroy(){
  //   console.log('ngOnDestroy called!');
  // }
  // ngDoCheck(){
  //   console.log("NgDoCheck called!");
  // }

}
