import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  messageVal:string
  private message = new BehaviorSubject<any>(this.messageVal);
  messageData = this.message.asObservable();

  constructor() { }

  updatedDataSelection(messageData){
    this.message.next(messageData);
  }

}
