import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formbuilder.group({
      title: ['', Validators.required],
      contents: ['', Validators.required]
    });
  }

  onCreatePost() {
    const post = new Post(this.newPostForm.get('title').value, this.newPostForm.get('contents').value, 0, new Date());

    this.postService.createPost(post);
    this.router.navigate(['/posts']);
  }
}
