import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';

import { mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MusicDataService {
  public favouritesList: Array<any> = [];

  constructor(
    private spotifyToken: SpotifyTokenService,
    private http: HttpClient
  ) {}

  getResources(url: any): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(`${url}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
    );
  }

  getNewReleases(): Observable<any> {
    return this.getResources('https://api.spotify.com/v1/browse/new-releases');
  }

  getArtistById(id: String): Observable<any> {
    return this.getResources(`https://api.spotify.com/v1/artists/${id}`);
  }

  getAlbumsByArtistId(id: String): Observable<any> {
    return this.getResources(`https://api.spotify.com/v1/artists/${id}/albums`);
  }

  getAlbumById(id: String): Observable<any> {
    return this.getResources(`https://api.spotify.com/v1/albums/${id}`);
  }

  searchArtists(searchString: String): Observable<any> {
    return this.getResources(
      `https://api.spotify.com/v1/search?q=${searchString}&type=artist&limit=50`
    );
  }

  addToFavourites(id: string): Observable<[String]> {
    return this.http.put<any>(`${environment.userAPIBase}/favourites/`, id);
  }

  removeFromFavourites(id: string): Observable<any> {
    return this.http
      .delete<[String]>(`${environment.userAPIBase}/favourites/${id}`)
      .pipe(
        mergeMap((favouritesArray) => {
          if (favouritesArray.length > 0) {
            return this.getResources(
              `https://api.spotify.com/v1/tracks/${favouritesArray.join()}`
            );
          } else {
            return new Observable((o) => {
              o.next([]);
            });
          }
        })
      );
  }

  getFavourites(): Observable<any> {
    return this.http
      .get<[String]>(`${environment.userAPIBase}/favourites/`)
      .pipe(
        mergeMap((favouritesArray) => {
          if (favouritesArray.length > 0) {
            return this.getResources(
              `https://api.spotify.com/v1/tracks/${favouritesArray.join()}`
            );
          } else {
            return new Observable((o) => {
              o.next([]);
            });
          }
        })
      );
  }
}
