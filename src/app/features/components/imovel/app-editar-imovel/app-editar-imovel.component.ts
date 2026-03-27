import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'acmo-app-editar-imovel',
  imports: [  CommonModule, ReactiveFormsModule ],
  templateUrl: './app-editar-imovel.component.html',
  styleUrl: './app-editar-imovel.component.css',
})
export class AppEditarImovelComponent {

  form: FormGroup;
  previews: string[] = [];


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      tipo: ['', Validators.required],
      tipoVenda: ['', Validators.required],
      situacao: ['', Validators.required],
      preco: ['', [Validators.required, Validators.min(0)]],
      quartos: ['', [Validators.min(0)]],
      banheiros: ['', [Validators.min(0)]],
      garagem: ['', [Validators.min(0)]],
      area: ['', [Validators.min(0)]],
      descricao: [''],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.previews = [];
      Array.from(input.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    }
  }

removerImagem(index: number) {
  this.previews.splice(index, 1);
}


salvarAlteracoes() {
  if (this.form.valid) {
    console.log('Dados do imóvel atualizados:', this.form.value);
    // Aqui você pode chamar o serviço para salvar no backend
  } else {
    console.warn('Formulário inválido');
  }
}

cancelar() {
  // Redirecionar ou limpar o formulário
  console.log('Edição cancelada');
}


}
