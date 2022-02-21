import { Injectable } from '@angular/core';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get user(): User {
    const user = <string|null> localStorage.getItem("user")
    return user? JSON.parse(user) : null
  }

  get isAuthenticate(): boolean {
    const token = <string|null> localStorage.getItem("token")
    return token? true : false
  }

  /**
   * Asignar sesión
   * 
   * @param user User
   * @param token token
   */
  setSession(user: User, token: string){
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", token)
  }

  /**
   * Cerrar sesión
   */
  closeSession(){
    localStorage.clear()
  }

}
