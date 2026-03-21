import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultaUsuarioComponent } from './app-consulta-usuario.component';

describe('AppConsultaUsuarioComponent', () => {
  let component: AppConsultaUsuarioComponent;
  let fixture: ComponentFixture<AppConsultaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppConsultaUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppConsultaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
