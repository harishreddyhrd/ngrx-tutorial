import { createReducer, on } from '@ngrx/store';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(incrementAction, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(decrementAction, (state) => {
    return {
      ...state,
      count: state.count - 1,
    };
  }),
  on(resetAction, (state) => {
    return {
      ...state,
      count: 0,
    };
  })
);

export function theCounterReducer(state, action) {
  return _counterReducer(state, action);
}
