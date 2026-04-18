import { Component, OnInit, computed, inject, signal } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonText,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CameraPhotoService } from '../../core/services/camera-photo.service';
import { IncidentStorageService } from '../../core/services/incident-storage.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-incident-create',
  standalone: true,
  templateUrl: './incident-create.page.html',
  styleUrls: ['./incident-create.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonText,
    IonButtons,
    IonBackButton,
  ],
})
export class IncidentCreatePage implements OnInit {
  private cameraPhotoService = inject(CameraPhotoService);
  private incidentStorageService = inject(IncidentStorageService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  readonly photoUri = signal<string | null>(null);
  readonly latitude = signal<number | null>(null);
  readonly longitude = signal<number | null>(null);

  readonly hasPhoto = computed(() => !!this.photoUri());

  async ngOnInit(): Promise<void> {
    await this.incidentStorageService.load();
  }

  async captureIncident(): Promise<void> {
    try {
      const result = await this.cameraPhotoService.capturePhotoWithLocation();

      this.photoUri.set(result.photoUri);
      this.latitude.set(result.latitude);
      this.longitude.set(result.longitude);

      await this.incidentStorageService.saveIncident({
        id: crypto.randomUUID(),
        photoUri: result.photoUri,
        latitude: result.latitude,
        longitude: result.longitude,
        createdAt: new Date().toISOString(),
      });

      await this.toastService.show('Incidencia guardada correctamente');
    } catch (error) {
      console.error(error);
      await this.toastService.show('No se pudo capturar la incidencia');
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}