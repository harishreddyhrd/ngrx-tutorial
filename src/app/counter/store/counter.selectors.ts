import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const counterStateFeatureSelector =
  createFeatureSelector<CounterState>('counter'); //same as that in StoreModule.forRoot({ counter: theCounterReducer }) in app.module.ts

export const countSelector = createSelector(
  counterStateFeatureSelector,
  (state) => {
    return state.count;
  }
);
export const counterTypeSelector = createSelector(
  counterStateFeatureSelector,
  (state) => {
    return state.counterType;
  }
);
