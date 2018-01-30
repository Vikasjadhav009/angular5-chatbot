import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ScrollDirective } from './scroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
