import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  

  private broadcastmessage = new BehaviorSubject<string>("My broadcast Message");
  broadcast = this.broadcastmessage.asObservable();

  constructor() { }

  updatedDataSelection(newbroadcast: string){
    this.broadcastmessage.next(newbroadcast);
  }

}
