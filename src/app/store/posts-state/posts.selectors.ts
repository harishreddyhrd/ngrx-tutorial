import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const postsListFeatureSelector = createFeatureSelector<PostsState>('posts');

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
