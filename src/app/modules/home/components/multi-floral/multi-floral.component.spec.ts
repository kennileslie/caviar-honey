import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFloralComponent } from './multi-floral.component';

describe('MultiFloralComponent', () => {
  let component: MultiFloralComponent;
  let fixture: ComponentFixture<MultiFloralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiFloralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFloralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
