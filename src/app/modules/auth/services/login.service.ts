import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap, throwError } from 'rxjs';
import { User } from 'src/app/core/auth/interfaces/user.interface';
import { AuthService } from '../../../core/auth/auth.service';
import { HttpErrorSignIn, HttpSuccessSignIn } from '../interfaces/sign-in.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private secretPassword: string = "1234";

  private userFake: User = {
    id: 1,
    username: "root",
    email: "entrenador@gmail.com",
  }

  constructor(
    private _authService: AuthService 
  ) { }

  /**
   * Sign in user
   * 
   * @param email Username or Email
   * @param password Password
   */
  signIn(email: string, password: string): Observable<HttpSuccessSignIn> {

    // simulate http request

    return of(null).pipe(
      delay(500),
      switchMap(() => {

        if(email == this.userFake.email && password == this.secretPassword){

          this._authService.setSession(this.userFake, Math.random().toString(36).substr(2))

          return of({
            code: 200,
            user: this.userFake 
          })
        }

        return throwError(() => ({
          code: 422,
          message: 'Credenciales inválidas'
        }));

      })
    )

  }

}
