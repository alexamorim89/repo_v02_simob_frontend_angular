import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultaAgendaComponent } from './app-consulta-agenda.component';

describe('AppConsultaAgendaComponent', () => {
  let component: AppConsultaAgendaComponent;
  let fixture: ComponentFixture<AppConsultaAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppConsultaAgendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppConsultaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
