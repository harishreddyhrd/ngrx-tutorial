import { theCounterReducer } from './counter-state/counter.reducer';
import { thePostsReducer } from './posts-state/posts.reducer';

export const AppReducer = {
  counter: theCounterReducer,
  posts: thePostsReducer,
};
