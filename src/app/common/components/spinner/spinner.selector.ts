import { createSelector } from "@ngrx/store";
import {AppState} from "../../../app.state.interface";

export const selectFeature = (state: AppState) => state.spinner;


export const isLoadingSelector = createSelector(selectFeature, state => {
  return state.isLoading;
});
