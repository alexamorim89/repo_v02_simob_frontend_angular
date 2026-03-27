import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'acmo-app-cadastro-imovel',
  imports: [CommonModule],
  templateUrl: './app-cadastro-imovel.component.html',
  styleUrl: './app-cadastro-imovel.component.css',
})
export class AppCadastroImovelComponent {

  previews: string[] = [];

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

  tipoSelecionado: string = 'pessoa_fisica';

  selecionarTipo(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoSelecionado = selectElement.value;
  }

  isPessoaFisica(): boolean {
    return this.tipoSelecionado === 'pessoa_fisica';
  }

  isPessoaJuridica(): boolean {
    return this.tipoSelecionado === 'pessoa_juridica';
  }

  getSecaoClasses(): string {
    if (this.isPessoaFisica()) {
      return 'mt-8 border rounded-lg p-6 bg-green-50 border-green-300';
    } else if (this.isPessoaJuridica()) {
      return 'mt-8 border border-gray-300 rounded-lg p-6 bg-blue-50 mb-6';    }
    return 'mt-8 border border-gray-300 rounded-lg p-6 bg-gray-50';
  }

  removerImagem(index: number) {
  this.previews.splice(index, 1);
}



}
