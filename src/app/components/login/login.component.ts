import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { Login } from 'src/app/models/login';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIcon,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: Login = {
    email: 'victor@email.com',
    senha: 'admin'
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required, Validators.minLength(3)])

  errorMessage = '';

  constructor(private toastr: ToastrService, private authService: AuthService) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  logar() {
    this.authService.autenticao(this.login).subscribe(resposta => {
      console.log("teste")
    }, () => {
      this.toastr.error('Usuário e/ou senha inválidos')
    })
  }

  updateErrorMessage() {
    if (this.email.hasError('email')) {
      this.errorMessage = 'E-mail inválido';
    } else {
      this.errorMessage = '';
    }
  }

  camposEstaoInvalidos(): boolean {
    return !(this.email.valid && this.senha.valid)
  }

  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}
