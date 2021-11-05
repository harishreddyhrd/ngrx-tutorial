import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostsListComponent, AddPostComponent, EditPostComponent],
  imports: [CommonModule, ReactiveFormsModule, PostsRoutingModule],
})
export class PostsModule {}
