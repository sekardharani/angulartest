import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registermessagedata:string;
  constructor(private registermessageService:MessageService) { }

  ngOnInit() {
    this.registermessageService.broadcast.subscribe(broadcast => this.registermessagedata = broadcast);
  }

  updateregisterbroadcast(){
    this.registermessagedata = "Register Broadcast Message";
    this.registermessageService.updatedDataSelection(this.registermessagedata)
  }

}
