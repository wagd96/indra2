import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {News} from '../../models/News'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  newsAddForm: FormGroup;
  submitted=false;
  body:string=""

  
  news: News = {
    body: '',
    headLine: '',
    summary: '',
    author: '',
    date: ''
  }

  

  constructor(
    private firebaseService : FirebaseService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.newsAddForm = this.fb.group({
      body: ['', Validators.required ],
      headLine: ['', Validators.required ],
      summary: ['', Validators.required ],
      author: ['', Validators.required ]
    });
  }

  get form(){
    return this.newsAddForm.controls;
  }

  addNews(){
    this.submitted=true;

    if(this.newsAddForm.invalid){
      return;
    }
    
    this.news.body = this.news.body.replace(new RegExp('\n','g'), '<br/>');
    let date = new Date();
    this.news.date= date.getDate()+' / '+(date.getMonth()+1)+' / '+date.getUTCFullYear();
    this.firebaseService.addNews(this.news);
    this.newsAddForm.reset();
    
  }

}
