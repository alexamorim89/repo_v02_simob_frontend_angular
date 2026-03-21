import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastroUsuarioComponent } from './app-cadastro-usuario.component';

describe('AppCadastroUsuarioComponent', () => {
  let component: AppCadastroUsuarioComponent;
  let fixture: ComponentFixture<AppCadastroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCadastroUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
