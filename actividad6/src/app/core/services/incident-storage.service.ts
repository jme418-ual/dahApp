import { Injectable, signal } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Incident } from '../../shared/interfaces/incident.interface';

const STORAGE_KEY = 'incidents';

@Injectable({
  providedIn: 'root',
})
export class IncidentStorageService {
  readonly incidents = signal<Incident[]>([]);

  async load(): Promise<void> {
    const { value } = await Preferences.get({ key: STORAGE_KEY });
    const parsed: Incident[] = value ? JSON.parse(value) : [];
    this.incidents.set(parsed);
  }

  async saveIncident(incident: Incident): Promise<void> {
    const updated = [incident, ...this.incidents()];
    this.incidents.set(updated);

    await Preferences.set({
      key: STORAGE_KEY,
      value: JSON.stringify(updated),
    });
  }
}
