import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childtemp',
  templateUrl: './childtemp.component.html',
  styleUrls: ['./childtemp.component.css']
})
export class ChildtempComponent implements OnInit {
  childRightTitle : string;
  @Input() Childdata:string;
  @Input() Childrightbtn:string;
  
 
  @Output()Updaterightdata: EventEmitter<string> = new EventEmitter<string>();
  @Output()Updateleftdata: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
    this.childRightTitle = "Right child titlte from TS file";
    this.Childrightbtn = "Submit";
  }

  rightSide(){
    this.Updaterightdata.emit('Right Side');
  }

  
}
