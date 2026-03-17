import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { CLIENTS_MOCK } from '../mock/clients.mock';

@Injectable({ providedIn: 'root' })
export class ClientsService {
  getClients(): Client[] {
    return CLIENTS_MOCK;
  }
}
