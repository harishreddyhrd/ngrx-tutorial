import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const COUNTER_STATE_SELECTOR = 'counter';
const counterStateFeatureSelector = createFeatureSelector<CounterState>(
  COUNTER_STATE_SELECTOR
); //same as that in StoreModule.forRoot({ counter: theCounterReducer }) in app.module.ts

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
