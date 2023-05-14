import { createSelector } from "@ngrx/store";
import {SpinnerState} from "./spinner.interface";
// import { AppState } from "../../../app.state.interface";

export const selectFeature = (state: SpinnerState) => state;


export const isLoadingSelector = createSelector(selectFeature, state => state.isLoading);
