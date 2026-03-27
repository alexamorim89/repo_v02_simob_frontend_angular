import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'acmo-app-cadastro-cliente',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './app-cadastro-cliente.component.html',
  styleUrl: './app-cadastro-cliente.component.css',
})
export class AppCadastroClienteComponent {
   form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tipoCliente: ['fisica'], // valor inicial
      // Pessoa Física
      nome: [''],
      cpf: [''],
      rg: [''],
      dataNascimento: [''],
      telefone: [''],
      email: [''],
      endereco: [''],
      
      // Pessoa Jurídica
      razaoSocial: [''],
      nomeFantasia: [''],
      cnpj: [''],
      inscricaoEstadual: [''],
      telefoneComercial: [''],
      emailCorporativo: [''],
      enderecoEmpresa: [''],

      // Endereço
      cep: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']

    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Dados do cliente:', this.form.value);
    }
  }

  limparFormulario() {// Resetar para o tipo padrão
    this.form.reset();
    this.form.get('tipoCliente')?.setValue('fisica');
  }

}
