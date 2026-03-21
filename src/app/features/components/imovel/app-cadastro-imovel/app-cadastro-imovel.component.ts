import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'acmo-app-cadastro-imovel',
  imports: [CommonModule],
  templateUrl: './app-cadastro-imovel.component.html',
  styleUrl: './app-cadastro-imovel.component.css',
})
export class AppCadastroImovelComponent {

  preview: string | ArrayBuffer | null = null;

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.preview = reader.result;
        // this.imovel.imagem = file.name;
      };
      reader.readAsDataURL(file);
    }
  }

  tipoSelecionado: string = '';

  selecionarTipo(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoSelecionado = selectElement.value;
  }

  isPessoaFisica(): boolean {
    document.getElementById('campos-fisica')?.classList.remove('hidden');
    return this.tipoSelecionado === 'pessoa_fisica';
  }

  isPessoaJuridica(): boolean {
    document.getElementById('campos-juridica')?.classList.remove('hidden');
    return this.tipoSelecionado === 'pessoa_juridica';
  }

  getSecaoClasses(): string {
    if (this.isPessoaFisica()) {
      return 'mt-8 border rounded-lg p-6 bg-green-50 border-green-300';
    } else if (this.isPessoaJuridica()) {
      return 'mt-8 border rounded-lg p-6 bg-blue-50 border-blue-300';
    }
    return 'mt-8 border border-gray-300 rounded-lg p-6 bg-gray-50';
  }





}
