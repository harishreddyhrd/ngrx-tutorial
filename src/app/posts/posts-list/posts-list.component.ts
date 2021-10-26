import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { postsSelector } from 'src/app/store/posts-state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  showAddPostForm: boolean = false;
  showEditPostForm: boolean = false;
  isPostSwitched: boolean = false;
  listOfPosts!: Observable<Post[]>;
  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.listOfPosts = this._store.select(postsSelector);
  }
}
