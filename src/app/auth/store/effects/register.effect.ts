import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {registerAction, registerFailureAction, registerSuccessAction} from 'src/app/auth/store/actions';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from 'src/app/auth/services/auth.service';
import {map, of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({currentUser})
          }),
          catchError(() => {
            return of(registerFailureAction())
          })
        )
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {

  }
}
