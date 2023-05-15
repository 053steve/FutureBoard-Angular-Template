
import {SpinnerState} from "./common/components/spinner/spinner.interface";
import {AuthState} from "./common/services/auth/auth.interface";


export interface AppState {
  spinner: SpinnerState
  auth: AuthState
}