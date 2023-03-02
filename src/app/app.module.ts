import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnTeteComponent } from './composants/en-tete/en-tete.component';
import { MainZoneComponent } from './composants/main-zone/main-zone.component';
import { ListUserComponent } from './composants/list-user/list-user.component';
import { ChatZoneComponent } from './composants/chat-zone/chat-zone.component';
import { MessageBlocComponent } from './sousComposants/message-bloc/message-bloc.component';
import { UserComponent } from './sousComposants/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    MainZoneComponent,
    ListUserComponent,
    ChatZoneComponent,
    MessageBlocComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
