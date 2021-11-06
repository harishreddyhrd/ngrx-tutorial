import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { thePostsReducer } from '../store/posts-state/posts.reducer';
import { POSTS_STATE_SELECTOR } from '../store/posts-state/posts.selectors';

@NgModule({
  declarations: [PostsListComponent, AddPostComponent, EditPostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    StoreModule.forFeature(POSTS_STATE_SELECTOR, thePostsReducer),
  ],
})
export class PostsModule {}
