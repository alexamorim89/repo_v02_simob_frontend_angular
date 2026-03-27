import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditarImovelComponent } from './app-editar-imovel.component';

describe('AppEditarImovelComponent', () => {
  let component: AppEditarImovelComponent;
  let fixture: ComponentFixture<AppEditarImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEditarImovelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEditarImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
