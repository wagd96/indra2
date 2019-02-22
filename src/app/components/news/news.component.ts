import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {News} from '../../models/News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news : News[];

  constructor(public newsService : FirebaseService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe( news => {
      news.forEach(item => {
        item['body'] = item['body'].replace(new RegExp('<br/>','g'), '\n');
      });
      
      this.news = news;
    });
  }

  deleteNotice(event, news: News){
    console.log(event);
    this.newsService.deleteNotice(news);
  }

}
