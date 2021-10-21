import { createReducer, on } from '@ngrx/store';
import {
  addCustomCountAction,
  changeCounterTypeAction,
  decrementAction,
  incrementAction,
  resetAction,
} from './counter.actions';
import { initialCounterState } from './counter.state';

const _counterReducer = createReducer(
  initialCounterState,
  on(incrementAction, (state) => {
    console.log('on::incrementAction____state', state);
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(decrementAction, (state) => {
    console.log('on::decrementAction____state', state);
    return {
      ...state,
      count: state.count - 1,
    };
  }),
  on(resetAction, (state) => {
    console.log('on::resetAction____state', state);
    return {
      ...state,
      count: 0,
      counterType: 'Eggs Counter',
    };
  }),
  on(addCustomCountAction, (state, action) => {
    console.log('on::addCustomCountAction____state', state);
    console.log('on::addCustomCountAction____action', action);
    return {
      ...state,
      count: state.count + action.customCount,
    };
  }),
  on(changeCounterTypeAction, (state) => {
    return {
      ...state,
      counterType: 'Box Counter',
    };
  })
);

export function theCounterReducer(state, action) {
  return _counterReducer(state, action);
}
