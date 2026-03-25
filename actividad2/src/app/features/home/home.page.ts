import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonBadge,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonSpinner,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { heart, heartOutline } from 'ionicons/icons';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonThumbnail,
    IonSpinner,
    IonIcon,
    RouterLink,
  ],
})
export class HomePage {
  public readonly movieService = inject(MovieService);

  protected readonly heart = heart;
  protected readonly heartOutline = heartOutline;

  onSearch(event: Event): void {
    const target = event.target as HTMLIonSearchbarElement;
    const value = target.value?.toString() ?? '';
    this.movieService.searchMovies(value);
  }

  getPoster(poster: string): string {
    return poster && poster !== 'N/A'
      ? poster
      : 'https://ionicframework.com/docs/img/demos/thumbnail.svg';
  }
}