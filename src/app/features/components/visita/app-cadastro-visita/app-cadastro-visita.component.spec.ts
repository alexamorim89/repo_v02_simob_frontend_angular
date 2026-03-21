import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastroVisitaComponent } from './app-cadastro-visita.component';

describe('AppCadastroVisitaComponent', () => {
  let component: AppCadastroVisitaComponent;
  let fixture: ComponentFixture<AppCadastroVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCadastroVisitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCadastroVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
