import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultaVisitaComponent } from './app-consulta-visita.component';

describe('AppConsultaVisitaComponent', () => {
  let component: AppConsultaVisitaComponent;
  let fixture: ComponentFixture<AppConsultaVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppConsultaVisitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppConsultaVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
