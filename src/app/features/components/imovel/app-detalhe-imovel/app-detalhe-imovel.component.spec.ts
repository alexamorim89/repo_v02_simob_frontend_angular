import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetalheImovelComponent } from './app-detalhe-imovel.component';

describe('AppDetalheImovelComponent', () => {
  let component: AppDetalheImovelComponent;
  let fixture: ComponentFixture<AppDetalheImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDetalheImovelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDetalheImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
