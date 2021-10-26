import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export const ADD_POST_ACTION = '[posts page] add post action';
export const UPDATE_POST_ACTION = '[posts page] edit post action';

export const addNewPostAction = createAction(
  ADD_POST_ACTION,
  props<{ newPost: Post }>()
);

export const updateExistingPostAction = createAction(
  UPDATE_POST_ACTION,
  props<{ editedPost: Post }>()
);
