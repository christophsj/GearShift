import {
  Component,
  inject,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Car, CarModel } from '../../dtos/car';
import { CarModelSelectorComponent } from './car-model-selector/car-model-selector.component';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-create',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CarModelSelectorComponent,
    CommonModule,
  ],
  templateUrl: './car-create.component.html',
  styleUrl: './car-create.component.scss',
})
export class CarCreateComponent implements OnInit {
  carForm!: FormGroup;
  modelId: string | undefined;
  models = inject(CarService).getModels({});
  saveCar = inject(CarService).addCar();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.carForm = this.fb.group({
      kilometers: [0, [Validators.required, Validators.min(0)]],
      registeredAt: [new Date(), Validators.required],
      color: ['', Validators.required],
      model: this.fb.group({
        make: ['', Validators.required],
        model: ['', Validators.required],
        year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      }),
    });

    this.carForm.get('model')?.valueChanges.subscribe((model) => {
      this.modelId = undefined;
    });
  }

  async onSubmit() {
    if (this.carForm!.valid) {
      const car: Car = this.carForm!.value;
      car.model = { ...car.model, id: this.modelId };
      await this.saveCar.mutateAsync(car);
      await new Promise((r) => setTimeout(r, 2000));
      this.saveCar.reset();
    }
  }

  onModelSelected(newItem: CarModel | undefined): void {
    console.log(newItem);
    if (!newItem) {
      this.modelId = undefined;
      return;
    }

    let { id, ...modelValues } = newItem!;
    this.carForm.get('model')?.setValue(modelValues);
    this.modelId = id;
  }
}
