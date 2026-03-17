import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonButton, NavController, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { people, calendar, cube } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonButton, IonIcon],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  private navCtrl = inject(NavController);

  constructor() {
    addIcons({ people, calendar, cube });
  }

  logout() {
    localStorage.clear();
    this.navCtrl.navigateRoot('/login');
  }
}
