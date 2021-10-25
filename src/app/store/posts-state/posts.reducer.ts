import { createReducer, on } from '@ngrx/store';
import { addNewPostAction } from './posts.actions';
import { initialPostsState } from './posts.state';

const _postsReducer = createReducer(
  initialPostsState,
  on(addNewPostAction, (state, action) => {
    let theNewPost = action.newPost;
    console.log(theNewPost);
    return {
      ...state,
      postsList: [...state.postsList, action.newPost],
    };
  })
);

export function thePostsReducer(state, action) {
  return _postsReducer(state, action);
}
