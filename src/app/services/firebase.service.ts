import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import {Notice} from '../models/Notice'
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  newsRef: AngularFireList<any>;    
  noticeRef: AngularFireObject<any>;
  
  constructor(private firebase:AngularFireDatabase) { 
    
  }
  
  public addNotice(notice: Notice) {
    this.newsRef.push({
      body: notice.body,
      headLine: notice.headLine,
      summary: notice.summary,
      author: notice.author,
      date: notice.date
    })
  }

  public getNews(){
    this.newsRef = this.firebase.list('news-list');
    return this.newsRef;
  }

  public updateNotice(notice: Notice) {
    this.noticeRef.update({
      body: notice.body,
      headLine: notice.headLine,
      summary: notice.summary,
      author: notice.author,
      date: notice.date
    })
  }

  public deleteNotice(id: string){
    this.noticeRef = this.firebase.object('news-list/'+id);
    this.noticeRef.remove();
    
  }
}

