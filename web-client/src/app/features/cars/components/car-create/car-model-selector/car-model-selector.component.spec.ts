import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModelSelectorComponent } from './car-model-selector.component';

describe('CarModelSelectorComponent', () => {
  let component: CarModelSelectorComponent;
  let fixture: ComponentFixture<CarModelSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarModelSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarModelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
