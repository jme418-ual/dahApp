import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  async show(message: string): Promise<void> {
    try {
      if (Capacitor.isNativePlatform()) {
        await Toast.show({
          text: message,
          duration: 'short',
        });
        return;
      }

      console.log(message);
    } catch (error) {
      console.error('Error al mostrar el mensaje:', error);
    }
  }
}
