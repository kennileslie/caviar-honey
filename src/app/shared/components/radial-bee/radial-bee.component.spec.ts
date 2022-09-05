import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialBeeComponent } from './radial-bee.component';

describe('RadialBeeComponent', () => {
  let component: RadialBeeComponent;
  let fixture: ComponentFixture<RadialBeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialBeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialBeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
