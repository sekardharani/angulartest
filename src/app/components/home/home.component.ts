import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homemessagedata:string;
  constructor(private homemessageService:MessageService) { }

  ngOnInit() {
    this.homemessageService.broadcast.subscribe(broadcast => this.homemessagedata = broadcast);
  }

  updatehomebroadcast(){
    this.homemessagedata = "Home Broadcast Message";
    this.homemessageService.updatedDataSelection(this.homemessagedata)
  }

}
