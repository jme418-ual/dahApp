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

type LocationStatus = 'idle' | 'loading' | 'ok' | 'unavailable';

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
  readonly locationStatus = signal<LocationStatus>('idle');
  readonly isCapturing = signal(false);
  readonly feedbackMessage = signal<string | null>(null);

  readonly hasPhoto = computed(() => !!this.photoUri());

  async ngOnInit(): Promise<void> {
    await this.incidentStorageService.load();
  }

  async captureIncident(): Promise<void> {
    if (this.isCapturing()) {
      return;
    }

    this.isCapturing.set(true);

    try {
      const photoUri = await this.cameraPhotoService.capturePhoto();

      this.photoUri.set(photoUri);
      this.latitude.set(null);
      this.longitude.set(null);
      this.locationStatus.set('loading');

      const location = await this.cameraPhotoService.getLocation();

      this.latitude.set(location.latitude);
      this.longitude.set(location.longitude);

      if (location.latitude !== null && location.longitude !== null) {
        this.locationStatus.set('ok');
      } else {
        this.locationStatus.set('unavailable');
      }

      await this.incidentStorageService.saveIncident({
        id: crypto.randomUUID(),
        photoUri,
        latitude: location.latitude ?? 0,
        longitude: location.longitude ?? 0,
        createdAt: new Date().toISOString(),
      });

      this.isCapturing.set(false);
      this.toastService.show('Incidencia guardada correctamente');
    } catch (error) {
      console.error(error);
      this.locationStatus.set('idle');
      this.isCapturing.set(false);
      this.toastService.show('No se pudo capturar la incidencia');
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}