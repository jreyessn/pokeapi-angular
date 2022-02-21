import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorSignIn, HttpSuccessSignIn } from '../../interfaces/sign-in.interface';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * form
   */
  public signInForm!: FormGroup;

  /**
   * Mensajes externos al componente de validación
   */
  public errorExternal: string = ''

  /**
   * Estado de formulario. 0 sin enviar, 1 completado
   */
  public statusForm: number = 0

  constructor(
    private _loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: [null, [ Validators.required, Validators.email ]],
      password: [null, Validators.required]
    })
  }

  signIn(){
    
    const { email, password } = this.signInForm.value
    
    this.errorExternal = ''

    this._loginService.signIn(email, password).subscribe({
      next: (res: HttpSuccessSignIn) => {
        this.statusForm = 1

        setTimeout(() => this.router.navigateByUrl("/pokemons"), 500)
      },
      error: (err: HttpErrorSignIn) => {
        this.statusForm    = 0
        this.errorExternal = err.message
      }
    })
  }

}
