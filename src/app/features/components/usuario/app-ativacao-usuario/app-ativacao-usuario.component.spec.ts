import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAtivacaoUsuarioComponent } from './app-ativacao-usuario.component';

describe('AppAtivacaoUsuarioComponent', () => {
  let component: AppAtivacaoUsuarioComponent;
  let fixture: ComponentFixture<AppAtivacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAtivacaoUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAtivacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
