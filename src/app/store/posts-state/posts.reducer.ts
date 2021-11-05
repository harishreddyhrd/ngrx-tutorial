import { createReducer, on } from '@ngrx/store';
import {
  addNewPostAction,
  deleteExistingPostAction,
  updateExistingPostAction,
} from './posts.actions';
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
  }),
  on(updateExistingPostAction, (state, action) => {
    let theEditedPost = action.editedPost;
    let updatedPostsList = state.postsList.map((thePostInsidePostsList) => {
      if (action.editedPost.id === thePostInsidePostsList.id) {
        return theEditedPost;
      } else {
        return thePostInsidePostsList;
      }
    });
    // console.log(theEditedPost);
    return {
      ...state,
      postsList: updatedPostsList,
    };
  }),
  on(deleteExistingPostAction, (state, action) => {
    // console.log(action.existingPostToBeDeleted);
    const existingPostToBeDeleted = action.existingPostToBeDeleted;
    const updatedPostsListAfterDeletion = state.postsList.filter((thePost) => {
      return thePost != existingPostToBeDeleted;
    });
    return {
      ...state,
      postsList: updatedPostsListAfterDeletion,
    };
  })
);

export function thePostsReducer(state, action) {
  return _postsReducer(state, action);
}
