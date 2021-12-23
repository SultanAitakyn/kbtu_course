import {AuthStateInterface} from 'src/app/auth/types/authState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  addToFav,
  loginAction,
  loginSuccessAction, logOut,
  registerAction,
  registerSuccessAction
} from 'src/app/auth/store/actions';
import {AuthService} from 'src/app/auth/services/auth.service';
import {act} from '@ngrx/effects';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  user: null,
  isLoggedIn: false
}

const authReducer = createReducer(initialState,
  on(registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      user: action.currentUser,
      isLoggedIn: true
    })),
  on(loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      user: action.currentUser,
      isLoggedIn: true
    })),
  on(addToFav,
    (state, action): AuthStateInterface => ({
      ...state,
      user: {...state.user!, favourites: action.favourites},
    })),
  on(logOut,
    (state): AuthStateInterface => ({
      ...state,
      user: null,
      isLoggedIn: false
    })),
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
