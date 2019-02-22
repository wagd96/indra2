import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  noticeForm: FormGroup;
  submitted = false;
  

  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.noticeForm = this.fb.group({
      body: ['', Validators.required],
      headLine: ['', Validators.required],
      summary: ['', Validators.required],
      author: ['', Validators.required],
      date: [new Date().toISOString().split('T')[0]]
    });
  }

  public get headLine(){
    return this.noticeForm.get('headLine');
  }

  public get summary(){
    return this.noticeForm.get('summary');
  }
  public get body(){
    return this.noticeForm.get('body');
  }
  public get author(){
    return this.noticeForm.get('author');
  }


  submitNotice() {
    this.submitted = true;
    this.noticeForm.controls['body'] = this.noticeForm.controls['body'].value.replace(new RegExp('\n', 'g'), '<br/>');
    this.firebaseService.addNotice(this.noticeForm.value);
    this.toastr.success('La noticia: ' + this.noticeForm.controls['headLine'].value + ' fue agregada con éxito.');
    this.noticeForm.reset();
  }

}
