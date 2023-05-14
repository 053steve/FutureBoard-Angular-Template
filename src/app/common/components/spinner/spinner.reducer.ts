import { createReducer, on } from '@ngrx/store';
import { showSpinner, hideSpinner } from './spinner.action';
import {SpinnerState} from "./spinner.interface";

export const initialState: SpinnerState = {
  isLoading: false
};

export const spinnerReducer = createReducer(
  initialState,
  on(showSpinner, (state) => ({...state, isLoading: true})),
  on(hideSpinner, (state) => ({...state, isLoading: false}))
);
