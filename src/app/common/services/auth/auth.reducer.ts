import { createReducer, on } from '@ngrx/store';
import {AuthState} from './auth.interface';
import {login, loginSuccess, logout} from "./auth.action";

export const initialState: AuthState = {
  authToken: null
}

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { authToken }) => {
    return {
      ...state,
      authToken: authToken
    };
  }),
  on(logout, state => ({
    ...state,
    authToken: null
  }))
)