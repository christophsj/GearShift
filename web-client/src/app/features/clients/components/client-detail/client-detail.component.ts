import { Component, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { ClientDetails } from '../../dto/client';
import { QueryObserverResult } from '@ngneat/query';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.scss'
})
export class ClientDetailComponent {

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];
    this.client = inject(ClientService).getClient(id).result$;
  }

  client: Observable<QueryObserverResult<ClientDetails, Error>>;
}
