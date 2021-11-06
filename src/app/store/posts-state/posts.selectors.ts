import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const POSTS_STATE_SELECTOR = 'posts';
const postsListFeatureSelector =
  createFeatureSelector<PostsState>(POSTS_STATE_SELECTOR);

export const postsSelector = createSelector(
  postsListFeatureSelector,
  (state) => {
    return state.postsList;
  }
);

export const postSelectorByID = (selectedPostId: number) =>
  createSelector(postsListFeatureSelector, (state) => {
    return state.postsList.find((thePost) => thePost.id === selectedPostId);
  });
