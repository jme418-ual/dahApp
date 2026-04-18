import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class CameraPhotoService {
  async capturePhotoWithLocation(): Promise<{
    photoUri: string;
    latitude: number;
    longitude: number;
  }> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    const position = await Geolocation.getCurrentPosition();

    return {
      photoUri: image.webPath ?? '',
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  }
}
