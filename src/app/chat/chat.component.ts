import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnChanges {

  allchats = [];

  constructor(private chatS:ChatService) { 
  }

  
ngOnChanges(){
	console.log('somthing happn in chat.....');
}

  ngOnInit() {
  		this.chatS.changeEve.subscribe(data=>{

  			this.allchats = data;
  		})
  }

}
