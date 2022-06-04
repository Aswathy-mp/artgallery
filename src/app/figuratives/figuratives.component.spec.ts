import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurativesComponent } from './figuratives.component';

describe('FigurativesComponent', () => {
  let component: FigurativesComponent;
  let fixture: ComponentFixture<FigurativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigurativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
