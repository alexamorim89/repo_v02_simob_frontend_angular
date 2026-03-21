import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastroAgendaComponent } from './app-cadastro-agenda.component';

describe('AppCadastroAgendaComponent', () => {
  let component: AppCadastroAgendaComponent;
  let fixture: ComponentFixture<AppCadastroAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCadastroAgendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCadastroAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
