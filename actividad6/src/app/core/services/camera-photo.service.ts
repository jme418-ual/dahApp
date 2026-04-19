import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class CameraPhotoService {
  async capturePhoto(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    if (Capacitor.getPlatform() === 'android' && image.path) {
      return Capacitor.convertFileSrc(image.path);
    }

    return image.webPath ?? '';
  }

  async getLocation(): Promise<{
    latitude: number | null;
    longitude: number | null;
  }> {
    try {
      const permissions = await Geolocation.checkPermissions();

      if (permissions.location !== 'granted') {
        await Geolocation.requestPermissions();
      }

      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 30000,
      });

      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error) {
      console.warn('No se pudo obtener la geolocalización', error);

      return {
        latitude: null,
        longitude: null,
      };
    }
  }
}
