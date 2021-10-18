import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const counterStateFeatureSelector =
  createFeatureSelector<CounterState>('count');

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
