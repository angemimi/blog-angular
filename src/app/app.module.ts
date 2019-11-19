import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';

const appRoutes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: NewPostComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
