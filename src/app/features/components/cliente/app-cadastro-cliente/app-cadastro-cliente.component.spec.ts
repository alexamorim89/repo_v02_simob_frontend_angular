import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastroClienteComponent } from './app-cadastro-cliente.component';

describe('AppCadastroClienteComponent', () => {
  let component: AppCadastroClienteComponent;
  let fixture: ComponentFixture<AppCadastroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCadastroClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
