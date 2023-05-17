
import {SpinnerState} from "./common/components/spinner/spinner.interface";
import {AuthState} from "./common/services/auth/auth.interface";
import {AlertState} from "./common/components/alert/alert.interface";


export interface AppState {
  alert: AlertState
  spinner: SpinnerState
  auth: AuthState
}