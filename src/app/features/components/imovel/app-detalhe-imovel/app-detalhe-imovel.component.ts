import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'acmo-app-detalhe-imovel',
  imports: [ CommonModule, FormsModule, RouterModule ],
  templateUrl: './app-detalhe-imovel.component.html',
  styleUrl: './app-detalhe-imovel.component.css',
})
export class AppDetalheImovelComponent {
  imovelId: string | null = null;
  showDeleteModal = false;

  imovel = {
    temAreaServico: true,
    temArmarioCozinha: true,
    temArmarioQuarto: true,
    temArmarioProjetado: true,
    temBoxBanheiro: true,
    temCeramica: true,
    temCercado: true,
    temCloset: true,
    temCobertura: true,
    temCondominioFechado: true,
    temConjugada: true,
    temCopa: true,
    temCorredor: true,
    temCozinha: true,
    temCozinhaAmericana: true,
    temDespensa: true,
    temEscritorio: true,
    temEsquadra: true,
    temGradeado: true
  };


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.imovelId = this.route.snapshot.paramMap.get('id');
    // Aqui você pode chamar um serviço para buscar os detalhes do imóvel pelo ID
  }


  abrirModalExclusao() {
    this.showDeleteModal = true;
  }

  fecharModal() {
    this.showDeleteModal = false;
  }

  confirmarExclusao() {
    // aqui você coloca a lógica de exclusão (ex: chamar serviço)
    console.log('Imóvel excluído!');
    this.showDeleteModal = false;
  }



}
