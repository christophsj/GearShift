import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModel } from '../../../dtos/car';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-car-model-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-model-selector.component.html',
  styleUrl: './car-model-selector.component.scss',
})
export class CarModelSelectorComponent {

  @Input({ required: true })
  models!: CarModel[];

  @Input()
  selectedModelId  : string | undefined;
  @Output()
  selectedModelEmitter = new EventEmitter<CarModel>();

  toggleChip(model: CarModel) {
    if (model.id == this.selectedModelId) {
      this.selectedModelId = undefined;
      this.selectedModelEmitter.emit(undefined);
    } else {
      this.selectedModelId = model.id;
      this.selectedModelEmitter.emit(model);
    }
  }

}
