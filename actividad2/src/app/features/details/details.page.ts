import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSpinner,
} from '@ionic/angular/standalone';
import { heart, heartOutline } from 'ionicons/icons';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSpinner,
  ],
})
export class DetailsPage {
  private readonly route = inject(ActivatedRoute);
  public readonly movieService = inject(MovieService);

  protected readonly heart = heart;
  protected readonly heartOutline = heartOutline;

  constructor() {
    effect(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.movieService.getMovieDetails(id);
      }
    });
  }

  toggleFavorite(): void {
    const movie = this.movieService.currentMovie();
    if (movie) {
      this.movieService.toggleFavorite(movie);
    }
  }

  isFavorite(): boolean {
    const movie = this.movieService.currentMovie();
    return movie ? this.movieService.isFavorite(movie.imdbID) : false;
  }

  getPoster(poster: string): string {
    return poster && poster !== 'N/A'
      ? poster
      : 'https://ionicframework.com/docs/img/demos/thumbnail.svg';
  }
}