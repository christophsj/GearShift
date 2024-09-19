import { Component, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../dto/client';
import { PageResponse } from '../../../../core/dto/page';
import { GridComponent, GridItem } from '../../../../core/components/grid/grid.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [
    GridComponent, CommonModule
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {

  clients = inject(ClientService).getClients();

  toListItems(responses: PageResponse<Client>[]): GridItem[] {
    return responses.flatMap(
      (response) => response.data.map((client) => this.toListItem(client))
    )
  }

  private toListItem(client: Client) {
    return {
      title: client.name,
      text: client.email,
      link: ['/clients', client.id]
    };
  }

}