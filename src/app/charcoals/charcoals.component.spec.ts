import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcoalsComponent } from './charcoals.component';

describe('CharcoalsComponent', () => {
  let component: CharcoalsComponent;
  let fixture: ComponentFixture<CharcoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharcoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharcoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
