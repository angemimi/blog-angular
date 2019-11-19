import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {
  private posts: Post[] = [
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet placerat urna, quis faucibus odio. Maecenas eleifend lectus eu varius dignissim. Sed sed vulputate nisl. In eget faucibus mauris, a elementum orci. Nullam purus orci, ornare id odio ut, faucibus efficitur sapien. Curabitur aliquam eget velit et convallis. Morbi pulvinar, erat eu bibendum imperdiet, ipsum ex vehicula velit, nec vulputate est lorem in felis. Nulla ante arcu, rhoncus quis ornare eu, dapibus a diam. Suspendisse congue, justo at tempor tristique, turpis ligula suscipit justo, a sagittis augue quam hendrerit mi. Ut eget mollis orci, et posuere ante. Nullam volutpat tincidunt orci a placerat.', 0, new Date()),
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet placerat urna, quis faucibus odio. Maecenas eleifend lectus eu varius dignissim. Sed sed vulputate nisl. In eget faucibus mauris, a elementum orci. Nullam purus orci, ornare id odio ut, faucibus efficitur sapien. Curabitur aliquam eget velit et convallis. Morbi pulvinar, erat eu bibendum imperdiet, ipsum ex vehicula velit, nec vulputate est lorem in felis. Nulla ante arcu, rhoncus quis ornare eu, dapibus a diam. Suspendisse congue, justo at tempor tristique, turpis ligula suscipit justo, a sagittis augue quam hendrerit mi. Ut eget mollis orci, et posuere ante. Nullam volutpat tincidunt orci a placerat.', 0, new Date()),
    new Post('Mon troisième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet placerat urna, quis faucibus odio. Maecenas eleifend lectus eu varius dignissim. Sed sed vulputate nisl. In eget faucibus mauris, a elementum orci. Nullam purus orci, ornare id odio ut, faucibus efficitur sapien. Curabitur aliquam eget velit et convallis. Morbi pulvinar, erat eu bibendum imperdiet, ipsum ex vehicula velit, nec vulputate est lorem in felis. Nulla ante arcu, rhoncus quis ornare eu, dapibus a diam. Suspendisse congue, justo at tempor tristique, turpis ligula suscipit justo, a sagittis augue quam hendrerit mi. Ut eget mollis orci, et posuere ante. Nullam volutpat tincidunt orci a placerat.', 0, new Date())
  ];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPost() {
    this.postSubject.next(this.posts);
  }

  createPost(post: Post) {
    this.posts.push(post);
    this.emitPost();
  }

  removePost(id: number) {
    this.posts.splice(id, 1);
    this.emitPost();
  }

  changeLoveIts(post: Post, moreLoveIts: number) {
    this.posts.find((postEl) => {
      if(postEl === post){
        postEl.loveIts += moreLoveIts;
        return true;
      }
    });

    this.emitPost();
  }
}
