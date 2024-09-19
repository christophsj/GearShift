import { Component, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Client } from '../../dto/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.scss',
})
export class ClientCreateComponent {
  clientForm!: FormGroup;
  saveClient = inject(ClientService).addClient();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        country: [''],
        zip: [''],
      }),
    });
  }

  async onSubmit() {
    if (this.clientForm!.valid) {
      const client: Client = this.clientForm!.value;
      await this.saveClient.mutateAsync(client);
      await new Promise((r) => setTimeout(r, 2000));
      this.saveClient.reset();
    }
  }
}
