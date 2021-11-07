import { createReducer } from '@ngrx/store';
import { initialAuthState } from './auth.state';

const _authReducer = createReducer(initialAuthState);

export function theAuthReducer(state, action) {
  return _authReducer(state, action);
}
