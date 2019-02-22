import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Notice } from '../../models/Notice';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  

  constructor(
    public noticeService: FirebaseService) { }

  ngOnInit() {
    // this.noticeService.getNews()..subscribe(news => {
    //   news.forEach(item => {
    //     item['body'] = item['body'].replace(new RegExp('<br/>', 'g'), '\n');
    //   });

    //   this.news = news;
    //});
  }

  deleteNotice(notice: Notice) {
    if (window.confirm('¿Estás seguro de eliminar la noticia: ' + notice.headLine + "?")) { // Asking from user before Deleting student data.
      //this.noticeService.deleteNotice(notice);
    }
    

  }

}
