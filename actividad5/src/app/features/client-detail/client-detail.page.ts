import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, mail, call, location, alertCircle } from 'ionicons/icons';
import { Client } from '../../shared/models/client.model';
import { ClientsService } from '../../shared/services/clients.service';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  templateUrl: 'client-detail.page.html',
  styleUrls: ['client-detail.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon
  ],
})
export class ClientDetailPage implements OnInit {
  @Input() id?: string;

  client: Client | null = null;
  idParam: string | null = null;

  private clientsService = inject(ClientsService);

  constructor() {
    addIcons({ person, mail, call, location, alertCircle });
  }

  ngOnInit(): void {
    this.idParam = this.id ?? null;

    const clientId = Number(this.id);

    if (!isNaN(clientId)) {
      this.client =
        this.clientsService.getClients().find((c: Client) => c.id === clientId) ?? null;
    }

    if (this.id) {
      console.log('Client ID from route:', this.id);
    }

    if (this.client) {
      console.log('Client data:', this.client);
    }
  }
}