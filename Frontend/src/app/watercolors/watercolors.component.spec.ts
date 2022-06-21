import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatercolorsComponent } from './watercolors.component';

describe('WatercolorsComponent', () => {
  let component: WatercolorsComponent;
  let fixture: ComponentFixture<WatercolorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatercolorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatercolorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
