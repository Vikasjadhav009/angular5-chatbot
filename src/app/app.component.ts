import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';

declare var jquery:any;
declare var $ :any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Angular-Chatbot';
  textData = '';

  	 data:String[] = [];

  	 constructor(private chatS:ChatService){}

  	 addChat(text){
		this.data.push(text);

		if(text === 'image'){
			//this.data.push() 
		}else{
			this.data.push('thanks');	
		}		
		
		//console.log(this.data);
		this.chatS.getData(this.data);

		this.chatS.changeEve.next(this.data);

		  	 $(".panel-body").stop().animate({
  	  scrollTop: $(".panel-body")[0].scrollHeight}, 1000);

		  	 this.textData = '';


  	 }




}
