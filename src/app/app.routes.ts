import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path:'',
    component: AppLayoutComponent,
    children:[
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/app-dash-board/app-dash-board.component').then(m => m.AppDashBoardComponent)
      },
      {
        path: 'imoveis/consulta',
        loadComponent: () =>
          import('./features/components/imovel/app-consulta-imovel/app-consulta-imovel.component').then(m => m.AppConsultaImovelComponent)
      },
       {
        path: 'imoveis/detalhes/:id',
        loadComponent: () =>
          import('./features/components/imovel/app-detalhe-imovel/app-detalhe-imovel.component').then(m => m.AppDetalheImovelComponent)
      },
      {
        path: 'imoveis/novo',
        loadComponent: () =>
          import('./features/components/imovel/app-cadastro-imovel/app-cadastro-imovel.component').then(m => m.AppCadastroImovelComponent)
      },
      {
        path: 'agendamentos/consulta',
        loadComponent: () =>
          import('./features/components/agenda/app-consulta-agenda/app-consulta-agenda.component').then(m => m.AppConsultaAgendaComponent)
      },
      {
        path: 'agendamentos/novo',
        loadComponent: () =>
          import('./features/components/agenda/app-cadastro-agenda/app-cadastro-agenda.component').then(m => m.AppCadastroAgendaComponent)
      },
      {
        path: 'visitas/consulta',
        loadComponent: () =>
          import('./features/components/visita/app-consulta-visita/app-consulta-visita.component').then(m => m.AppConsultaVisitaComponent) 
      },
      {
        path: 'visitas/nova',
        loadComponent: () =>
          import('./features/components/visita/app-cadastro-visita/app-cadastro-visita.component').then(m => m.AppCadastroVisitaComponent) 
      },
      {
        path: 'clientes/consulta',
        loadComponent: () =>
          import('./features/components/cliente/app-consulta-cliente/app-consulta-cliente.component').then(m => m.AppConsultaClienteComponent) 
      },
      {
        path: 'clientes/novo',
        loadComponent: () =>
          import('./features/components/cliente/app-cadastro-cliente/app-cadastro-cliente.component').then(m => m.AppCadastroClienteComponent) 
      },
        {
        path: 'usuarios/consulta',
        loadComponent: () =>
          import('./features/components/usuario/app-consulta-usuario/app-consulta-usuario.component').then(m => m.AppConsultaUsuarioComponent) 
      },
      {
        path: 'usuarios/novo',
        loadComponent: () =>
          import('./features/components/usuario/app-cadastro-usuario/app-cadastro-usuario.component').then(m => m.AppCadastroUsuarioComponent) 
      },
      {
        path: 'usuarios/ativacao',
        loadComponent: () =>
          import('./features/components/usuario/app-ativacao-usuario/app-ativacao-usuario.component').then(m => m.AppAtivacaoUsuarioComponent) 
      }
    ]
  }
];
