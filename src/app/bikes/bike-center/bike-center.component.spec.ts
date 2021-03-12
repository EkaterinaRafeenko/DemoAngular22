import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeCenterComponent } from './bike-center.component';

describe('BikeCenterComponent', () => {
  let component: BikeCenterComponent;
  let fixture: ComponentFixture<BikeCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
