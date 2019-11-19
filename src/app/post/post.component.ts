import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post_object: Post;
  @Input() post_id: number;

  constructor(private postService: PostService) { }

  ngOnInit() { }

  loveit() {
    // this.post_loveIts += 1;
    this.postService.changeLoveIts(this.post_object, 1);
  }

  dontloveit() {
    // this.post_loveIts -= 1;
    this.postService.changeLoveIts(this.post_object, -1);
  }

  onRemovePost() {
    this.postService.removePost(this.post_id);
  }
}
