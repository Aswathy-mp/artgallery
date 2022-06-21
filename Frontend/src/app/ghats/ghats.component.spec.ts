import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhatsComponent } from './ghats.component';

describe('GhatsComponent', () => {
  let component: GhatsComponent;
  let fixture: ComponentFixture<GhatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
