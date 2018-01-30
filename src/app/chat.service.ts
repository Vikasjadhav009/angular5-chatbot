import { Injectable,EventEmitter } from '@angular/core';


@Injectable()
export class ChatService {

	changeEve = new EventEmitter<any>();	
  
  constructor() { }

  	chatData:String[] = [];


  	getData(data){

  			this.chatData = data;
  			console.log(this.chatData);

  	}


}
