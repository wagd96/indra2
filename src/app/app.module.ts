import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddNewsComponent } from './components/add-news/add-news.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Services
import {FirebaseService} from './services/firebase.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'indraNews'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
