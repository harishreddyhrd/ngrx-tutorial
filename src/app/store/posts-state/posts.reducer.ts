import { createReducer } from '@ngrx/store';
import { initialPostsState } from './posts.state';

const _postsReducer = createReducer(initialPostsState);

export function PostsReducer(state, action) {
  return _postsReducer(state, action);
}
