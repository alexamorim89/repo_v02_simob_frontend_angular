import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultaImovelComponent } from './app-consulta-imovel.component';

describe('AppConsultaImovelComponent', () => {
  let component: AppConsultaImovelComponent;
  let fixture: ComponentFixture<AppConsultaImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppConsultaImovelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppConsultaImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
