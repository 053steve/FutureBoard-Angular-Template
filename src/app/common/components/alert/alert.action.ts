import {createAction, props} from '@ngrx/store';
import {ALERT_STATUS} from "./alert.component";

export const showAlert = createAction('[Alert] Show', props<{alertType: ALERT_STATUS, text: string}>());
export const hideAlert = createAction('[Alert] Hide');