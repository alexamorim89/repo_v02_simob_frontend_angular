import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultaClienteComponent } from './app-consulta-cliente.component';

describe('AppConsultaClienteComponent', () => {
  let component: AppConsultaClienteComponent;
  let fixture: ComponentFixture<AppConsultaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppConsultaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppConsultaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
