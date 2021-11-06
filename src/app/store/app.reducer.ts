import { theCounterReducer } from './counter-state/counter.reducer';
import { thePostsReducer } from './posts-state/posts.reducer';

export const AppReducer = {
  counter: theCounterReducer, //COUNTER_STATE_SELECTOR
  posts: thePostsReducer, //POSTS_STATE_SELECTOR
};
