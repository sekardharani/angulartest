import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent implements OnInit {
  childLeftTitle:string
  @Input() Childleftdata:string;
  @Output() leftsidedata : EventEmitter<string> = new EventEmitter();
  @Input() Childleftbtn : string;
  constructor() { }

  ngOnInit() {
    this.childLeftTitle = "Left child titlte from TS file";
    this.Childleftbtn = "Submit";
  }
  leftsidedataclick(){
    this.leftsidedata.emit("Left Side")
  }

}
