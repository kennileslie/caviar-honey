import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloralHexComponent } from './floral-hex.component';

describe('FloralHexComponent', () => {
  let component: FloralHexComponent;
  let fixture: ComponentFixture<FloralHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloralHexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloralHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
