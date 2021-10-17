import { createAction, props } from '@ngrx/store';

export const incrementAction = createAction('incrementCount');
export const decrementAction = createAction('decrementCount');
export const resetAction = createAction('resetCount');

export const addCustomCountAction = createAction(
  'customCountAddition',
  props<{ customCount: number }>()
);
