import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {News} from '../models/News'
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  newsCollection: AngularFirestoreCollection<News>;
  newsObservable: Observable<News[]>;
  noticeDoc: AngularFirestoreDocument<News>;
  newsName='News';
  
  constructor(private firebase:AngularFirestore) { 
    //this.newsObservable = this.firebase.collection('news').valueChanges;
  }

  public getNews(){
    
    this.newsCollection = this.firebase.collection(this.newsName,ref=>ref.orderBy('date','desc'));
    this.newsObservable = this.newsCollection.valueChanges();


     this.newsCollection.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        const data = action.payload.doc.data() as News;
        data.id = action.payload.doc.id; 
        return data;      
      });
    });
    
    this.newsObservable.subscribe(actions=>{
      actions.forEach(action=>{
        console.log("observable "+action.id)
      });
    });
    return this.newsObservable;
  }

  public addNews(notice:News){
    this.newsCollection = this.firebase.collection(this.newsName);
    this.newsCollection.add(notice);
  }

  public deleteNotice(news:News){
    console.log(news.id);
    //console.log(this.firebase.doc(`news/${news.id}`));
    //this.firebase.doc(`news/${news.id}`).delete ;
    //this.noticeDoc.delete();
  }
}

