import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post_title: string;
  @Input() post_content: string;
  @Input() post_loveIts: number;
  @Input() post_created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  loveit() {
    this.post_loveIts += 1;
  }

  dontloveit() {
    this.post_loveIts -= 1;
  }
}
