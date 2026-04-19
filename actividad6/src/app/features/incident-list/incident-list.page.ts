import { Component, OnInit, inject, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { IncidentStorageService } from '../../core/services/incident-storage.service';
import { ToastService } from '../../core/services/toast.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  templateUrl: './incident-list.page.html',
  styleUrls: ['./incident-list.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonButtons,
    IonBackButton,
    DatePipe,
  ],
})
export class IncidentListPage implements OnInit {
  private incidentStorageService = inject(IncidentStorageService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  readonly incidents = this.incidentStorageService.incidents;
  readonly feedbackMessage = signal<string | null>(null);

  async ngOnInit(): Promise<void> {
    await this.incidentStorageService.load();
  }

  async onItemClick(): Promise<void> {
    const message = 'En construcción';
    this.toastService.show(message);
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}