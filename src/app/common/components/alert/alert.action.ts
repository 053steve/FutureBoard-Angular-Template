import {createAction, props} from '@ngrx/store';

export const showAlert = createAction('[Alert] Show', props<{alertType: string, text: string}>());
export const hideAlert = createAction('[Alert] Hide');