import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

type AppPermissionErrorCode =
  | 'camera_denied'
  | 'camera_denied_permanently'
  | 'location_denied'
  | 'location_denied_permanently';

export class AppPermissionError extends Error {
  constructor(public code: AppPermissionErrorCode, message: string) {
    super(message);
    this.name = 'AppPermissionError';
  }
}

@Injectable({
  providedIn: 'root',
})
export class CameraPhotoService {
  private async ensureCameraPermission(): Promise<void> {
    const current = await Camera.checkPermissions();

    if (current.camera === 'granted') {
      return;
    }

    const requested = await Camera.requestPermissions({ permissions: ['camera'] });

    if (requested.camera === 'granted') {
      return;
    }

    if (requested.camera === 'denied') {
      throw new AppPermissionError(
        'camera_denied_permanently',
        'El permiso de cámara está bloqueado o denegado.',
      );
    }

    throw new AppPermissionError(
      'camera_denied',
      'El permiso de cámara fue denegado.',
    );
  }

  private async ensureLocationPermission(): Promise<void> {
    const current = await Geolocation.checkPermissions();

    if (current.location === 'granted') {
      return;
    }

    // Si está en prompt o prompt-with-rationale, intentamos pedirlo.
    if (
      current.location === 'prompt' ||
      current.location === 'prompt-with-rationale'
    ) {
      const requested = await Geolocation.requestPermissions();

      if (requested.location === 'granted') {
        return;
      }

      if (requested.location === 'denied') {
        throw new AppPermissionError(
          'location_denied_permanently',
          'El permiso de ubicación está bloqueado o denegado.',
        );
      }

      throw new AppPermissionError(
        'location_denied',
        'El permiso de ubicación fue denegado.',
      );
    }

    // Si ya llega como denied desde checkPermissions, lo tratamos como bloqueado
    // porque Android ya no mostrará el diálogo normal y tocará ir a ajustes.
    if (current.location === 'denied') {
      throw new AppPermissionError(
        'location_denied_permanently',
        'El permiso de ubicación está bloqueado. Debes activarlo en ajustes.',
      );
    }

    throw new AppPermissionError(
      'location_denied',
      'No se pudo obtener el permiso de ubicación.',
    );
  }

  async capturePhotoWithLocation(): Promise<{
    photoUri: string;
    latitude: number;
    longitude: number;
  }> {
    await this.ensureCameraPermission();
    await this.ensureLocationPermission();

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    const position = await Geolocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 15000,
      maximumAge: 30000,
    });

    return {
      photoUri: image.webPath ?? '',
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  }
}
