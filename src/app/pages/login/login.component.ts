import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showLogin = true;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    console.log('Form submitted1:', this.loginForm.value);
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login({ email, password }).subscribe(
        (response) => {
          console.log('Form submitted2:', email, password);
          if (response && response.result && response.result.token) {
            console.log('Form submitted3:', response.result.token);
            this.authService.saveToken(response.result.token); 
            this.router.navigate(['/dashboard']);
          } else {
            console.error('Token não encontrado na resposta.');
          }
        },
        (error) => {
          console.error('Erro na autenticação:', error);
          this.errorMessage = 'Falha na autenticação. Verifique suas credenciais.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
    }
  }

  closeAndNavigateHome(): void {
    this.showLogin = false;
    this.router.navigate(['/']);
  }
}
