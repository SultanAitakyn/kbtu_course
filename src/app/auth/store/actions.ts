import {createAction, props} from '@ngrx/store';
import {ActionTypes} from 'src/app/auth/store/actionTypes';
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {LoginRequestInterface} from 'src/app/auth/types/login.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE
)

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const addToFav = createAction(
  ActionTypes.ADD_FAV,
  props<{favourites: number[]}>()
)

export const logOut = createAction(
  ActionTypes.LOGOUT
)
