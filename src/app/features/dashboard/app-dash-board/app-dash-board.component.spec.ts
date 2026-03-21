import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashBoardComponent } from './app-dash-board.component';

describe('AppDashBoardComponent', () => {
  let component: AppDashBoardComponent;
  let fixture: ComponentFixture<AppDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
