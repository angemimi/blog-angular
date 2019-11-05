import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet placerat urna, quis faucibus odio. Maecenas eleifend lectus eu varius dignissim. Sed sed vulputate nisl. In eget faucibus mauris, a elementum orci. Nullam purus orci, ornare id odio ut, faucibus efficitur sapien. Curabitur aliquam eget velit et convallis. Morbi pulvinar, erat eu bibendum imperdiet, ipsum ex vehicula velit, nec vulputate est lorem in felis. Nulla ante arcu, rhoncus quis ornare eu, dapibus a diam. Suspendisse congue, justo at tempor tristique, turpis ligula suscipit justo, a sagittis augue quam hendrerit mi. Ut eget mollis orci, et posuere ante. Nullam volutpat tincidunt orci a placerat.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet placerat urna, quis faucibus odio. Maecenas eleifend lectus eu varius dignissim. Sed sed vulputate nisl. In eget faucibus mauris, a elementum orci. Nullam purus orci, ornare id odio ut, faucibus efficitur sapien. Curabitur aliquam eget velit et convallis. Morbi pulvinar, erat eu bibendum imperdiet, ipsum ex vehicula velit, nec vulputate est lorem in felis. Nulla ante arcu, rhoncus quis ornare eu, dapibus a diam. Suspendisse congue, justo at tempor tristique, turpis ligula suscipit justo, a sagittis augue quam hendrerit mi. Ut eget mollis orci, et posuere ante. Nullam volutpat tincidunt orci a placerat.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet placerat urna, quis faucibus odio. Maecenas eleifend lectus eu varius dignissim. Sed sed vulputate nisl. In eget faucibus mauris, a elementum orci. Nullam purus orci, ornare id odio ut, faucibus efficitur sapien. Curabitur aliquam eget velit et convallis. Morbi pulvinar, erat eu bibendum imperdiet, ipsum ex vehicula velit, nec vulputate est lorem in felis. Nulla ante arcu, rhoncus quis ornare eu, dapibus a diam. Suspendisse congue, justo at tempor tristique, turpis ligula suscipit justo, a sagittis augue quam hendrerit mi. Ut eget mollis orci, et posuere ante. Nullam volutpat tincidunt orci a placerat.',
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
