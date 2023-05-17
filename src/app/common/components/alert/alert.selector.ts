import { createSelector } from "@ngrx/store";
import {AppState} from "../../../app.state.interface";

export const selectFeature = (state: AppState) => state.alert;

export const alertStateSelector = createSelector(selectFeature, state => {
  return state;
})

