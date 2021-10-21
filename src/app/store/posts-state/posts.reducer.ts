import { createReducer } from '@ngrx/store';
import { initialPostsState } from './posts.state';

const _postsReducer = createReducer(initialPostsState);

export function thePostsReducer(state, action) {
  return _postsReducer(state, action);
}
