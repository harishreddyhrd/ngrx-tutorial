import { createAction } from '@ngrx/store';

export const INITIATE_LOGIN = '[auth page] login initiated';
export const LOGIN_SUCCESS = '[auth page] login successful';
export const LOGIN_FAIL = '[auth page] login failed';

export const initiateLoginAction = createAction(INITIATE_LOGIN);
export const LoginSuccessfulAction = createAction(LOGIN_SUCCESS);
export const loginFailureAction = createAction(LOGIN_FAIL);
