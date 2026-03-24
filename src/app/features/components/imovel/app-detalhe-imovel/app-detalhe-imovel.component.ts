import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'acmo-app-detalhe-imovel',
  imports: [ RouterModule ],
  templateUrl: './app-detalhe-imovel.component.html',
  styleUrl: './app-detalhe-imovel.component.css',
})
export class AppDetalheImovelComponent {
  imovelId: string | null = null;
  showDeleteModal = false;

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
