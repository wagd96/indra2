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
  
  news: News = {
    body: '',
    headLine: '',
    summary: ''
  }

  

  constructor(
    private firebaseService : FirebaseService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.newsAddForm = this.fb.group({
      body: ['', Validators.required ],
      headLine: ['', Validators.required ],
      summary: ['', Validators.required ]
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
    this.news.body = this.newsAddForm.get('body').value;
    this.news.headLine = this.newsAddForm.get('headLine').value;
    this.news.summary = this.newsAddForm.get('summary').value;
 
    this.firebaseService.addNews(this.news);

    this.newsAddForm.reset();
    
  }

}
