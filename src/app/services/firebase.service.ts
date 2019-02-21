import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {News} from '../models/News'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  newsCollection: AngularFirestoreCollection<News>;
  newsObservable: Observable<News[]>;
  newsName='News';
  
  constructor(private firebase:AngularFirestore) { 
    //this.newsObservable = this.firebase.collection('news').valueChanges;
  }

  public getNews(){
    
    this.newsCollection = this.firebase.collection(this.newsName,ref=>ref.orderBy('headLine','asc'));
    this.newsObservable = this.newsCollection.valueChanges();

    this.newsCollection.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        const data = action.payload.doc.data() as News;
        data.id = action.payload.doc.id;
      });
    });   

    return this.newsObservable;
  }

  public addNews(news:News){
    this.newsCollection = this.firebase.collection(this.newsName);
    this.newsCollection.add(news);
  }
}

