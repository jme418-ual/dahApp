import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  OMDbMovie,
  OMDbMovieDetail,
  OMDbSearchResponse,
} from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `https://www.omdbapi.com/?apikey=${environment.apiKeyOMDb}`;

  private readonly _movies = signal<OMDbMovie[]>([]);
  private readonly _currentMovie = signal<OMDbMovieDetail | null>(null);
  private readonly _favorites = signal<OMDbMovie[]>([]);
  private readonly _loading = signal(false);
  private readonly _searchTerm = signal('');

  public readonly movies = this._movies.asReadonly();
  public readonly currentMovie = this._currentMovie.asReadonly();
  public readonly favorites = this._favorites.asReadonly();
  public readonly loading = this._loading.asReadonly();
  public readonly searchTerm = this._searchTerm.asReadonly();

  public readonly totalResults = computed(() => this._movies().length);
  public readonly favoritesCount = computed(() => this._favorites().length);

  searchMovies(title: string): void {
    const query = title.trim();

    this._searchTerm.set(query);

    if (!query) {
      this._movies.set([]);
      return;
    }

    this._loading.set(true);

    this.http
      .get<OMDbSearchResponse>(`${this.apiUrl}&s=${encodeURIComponent(query)}`)
      .subscribe({
        next: (response) => {
          if (response.Response === 'True' && response.Search) {
            this._movies.set(response.Search);
          } else {
            this._movies.set([]);
          }
          this._loading.set(false);
        },
        error: () => {
          this._movies.set([]);
          this._loading.set(false);
        },
      });
  }

  getMovieDetails(id: string): void {
    if (!id) {
      this._currentMovie.set(null);
      return;
    }

    this._loading.set(true);

    this.http
      .get<OMDbMovieDetail>(`${this.apiUrl}&i=${encodeURIComponent(id)}&plot=full`)
      .subscribe({
        next: (response) => {
          if (response.Response === 'True') {
            this._currentMovie.set(response);
          } else {
            this._currentMovie.set(null);
          }
          this._loading.set(false);
        },
        error: () => {
          this._currentMovie.set(null);
          this._loading.set(false);
        },
      });
  }

  isFavorite(imdbID: string): boolean {
    return this._favorites().some((movie) => movie.imdbID === imdbID);
  }

  toggleFavorite(movie: OMDbMovie | OMDbMovieDetail): void {
    const exists = this.isFavorite(movie.imdbID);

    if (exists) {
      this._favorites.update((favorites) =>
        favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      );
      return;
    }

    const favoriteMovie: OMDbMovie = {
      Title: movie.Title,
      Year: movie.Year,
      imdbID: movie.imdbID,
      Type: movie.Type,
      Poster: movie.Poster,
    };

    this._favorites.update((favorites) => [...favorites, favoriteMovie]);
  }
}