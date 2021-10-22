import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const postsListFeatureSelector = createFeatureSelector<PostsState>('posts');

export const postsSelector = createSelector(
  postsListFeatureSelector,
  (state) => {
    return state.postsList;
  }
);
