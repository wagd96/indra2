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
  userAddForm: FormGroup;
  news: News = {
    body: '',
    byLine: '',
    headLine: '',
    summary: ''
  }
  constructor(
    private firebaseService : FirebaseService,
    private fb: FormBuilder) { 
      this.construirFormulario();
    }

  ngOnInit() {
  }

  construirFormulario() {
    this.userAddForm = this.fb.group({
      body: ['', Validators.compose([Validators.required]) ],
      byLine: ['', Validators.compose([Validators.required]) ],
      headLine: ['', Validators.compose([Validators.required]) ],
      summary: ['', Validators.compose([Validators.required]) ]
    });
  }

  addNews(){
    const body = this.userAddForm.get('body').value;
    const byLine = this.userAddForm.get('byLine').value;
    const headLine = this.userAddForm.get('headLine').value;
    const summary = this.userAddForm.get('summary').value;

    this.news.body = body;
    this.news.byLine = byLine;
    this.news.headLine = headLine;
    this.news.summary = summary;

    this.firebaseService.addNews(this.news);
  }

}
