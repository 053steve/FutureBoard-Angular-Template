import { createReducer, on } from '@ngrx/store';
import { hideAlert, showAlert } from './alert.action';
import {AlertState} from "./alert.interface";

export const initialState: AlertState = {
  isShow: false,
  alertType: '',
  text: ''
};

export const alertReducer = createReducer(
  initialState,
  on(hideAlert, (state) => ({...state, isShow: false})),
  on(showAlert, (state, {alertType, text}) => ({...state, isShow: true, alertType, text }))
);
