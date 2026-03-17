import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, mail, call, chevronForward } from 'ionicons/icons';
import { Client } from '../../shared/models/client.model';
import { ClientsService } from '../../shared/services/clients.service';
import { inject } from '@angular/core';
import { IconSet } from '../../shared/models/icon-set.model';

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss'],
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon
  ],
})
export class ClientsPage {
  clients: Client[] = [];
  private clientsService = inject(ClientsService);

  private readonly icons: IconSet = {
    person,
    mail,
    call,
    chevronForward
  };

  constructor() {
    addIcons(this.icons);
    this.clients = this.clientsService.getClients();
  }
}
