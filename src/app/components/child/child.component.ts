import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  childTitle:string;
  Childdataval:string;
  Childleftdataval:string;
  Childleftbtn:string;
  Childleftbtnval:string;
  Childrightbtnval:string;
  messageservicedata:string;
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.childTitle = "child works! from TS file";
    this.Childdataval = "Right Side value";
    this.Childleftdataval = "Left Side value";
    this.messageService.broadcast.subscribe(broadcast => this.messageservicedata = broadcast);
  }

  Updaterightdataval(rirghtval:string){
    this.childTitle = rirghtval;
  }
  Updateleftdataval(leftval:string){
    this.childTitle = leftval;
  }

  updateparentbroadcast(){
    this.messageService.updatedDataSelection("Parent broadcast message")
  }

  leftpanelupdate(){
    this.Childleftbtnval = "Left button";
  }

  rightpanelupdate(){
    this.Childrightbtnval = "Right button";
  }



  
}
