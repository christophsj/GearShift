import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailComponent } from './cars-detail.component';

describe('CarsDetailComponent', () => {
  let component: CarDetailComponent;
  let fixture: ComponentFixture<CarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
