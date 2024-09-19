import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Client } from '../../../../clients/dto/client';


@Component({
  selector: 'app-new-rental-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-rental-form.component.html',
  styleUrl: './new-rental-form.component.scss',
})
export class NewRentalFormComponent implements OnInit {
  form!: FormGroup;
  dropdownOptions!: { value: string; label: string }[];

  constructor(private fb: FormBuilder) {}

  @Input({ required: true })
  clients!: Client[];

  @Output() 
  newRent = new EventEmitter<NewRentalEvent>();

  ngOnInit() {
    this.form = this.fb.group({
      rentalStart: ['', Validators.required],
      rentalEnd: ['', Validators.required],
      clientId: ['', Validators.required],
    });

    this.dropdownOptions = this.clients.map((client) => {
      return {
        value: client.id,
        label: client.name,
      };
    });
  }

  onSubmit() {
    this.newRent.emit(this.form.value);
  }
}


export interface NewRentalEvent {
  rentalStart: string;
  rentalEnd: string;
  clientId: string;
}