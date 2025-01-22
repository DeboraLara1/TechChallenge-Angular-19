import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateUserService } from '../../services/create-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
})
export class NewAccountComponent {
  cadastroForm!: FormGroup;
  showLogin = true;

  constructor(
    private fb: FormBuilder,
    private userService: CreateUserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      captcha: [false, Validators.requiredTrue],
    });
  }
  onSubmit() {
    if (this.cadastroForm.valid) {
      const userData = {
        username: this.cadastroForm.value.nome,
        email: this.cadastroForm.value.email,
        password: this.cadastroForm.value.senha,
      };

      this.userService.criarUsuario(userData).subscribe(
        (response) => {
          console.log('Usuário criado com sucesso:', response);
          alert('Usuário criado com sucesso! Realize seu login para acessar sua conta!');
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Erro ao criar usuário:', error);
          alert('Erro ao criar o usuário. Tente novamente.');
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
  closeAndNavigateHome(): void {
    this.showLogin = false;
    this.router.navigate(['/']);
  }
}
