import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastroImovelComponent } from './app-cadastro-imovel.component';

describe('AppCadastroImovelComponent', () => {
  let component: AppCadastroImovelComponent;
  let fixture: ComponentFixture<AppCadastroImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCadastroImovelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCadastroImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
